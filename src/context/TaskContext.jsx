import { createContext, useContext } from "react";
import { useState } from "react";
import { client } from "../supabase/client";
import { useAuth } from "./AuthContext";

// Context for task/memory management functionality
export const TaskContext = createContext();

/**
 * Custom hook to access task context
 * @throws {Error} When used outside of TaskProvider
 * @returns {Object} Task context with state and CRUD operations
 */
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

/**
 * Task provider component that manages memory/task state and operations
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that need task context
 * @returns {JSX.Element} Provider component with task management functionality
 */
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  /**
   * Fetch user's tasks/memories from Supabase
   * @param {Object} params - Query parameters
   * @param {string} params.tableName - Name of the database table
   * @param {string} [params.fields] - Comma-separated list of fields to select
   */
  const getTasks = async ({ tableName, fields }) => {
    setLoading(true);
    const userID = user?.id;
    const { error, data } = await client
      .from(tableName)
      .select(fields)
      .eq("user_uid", userID);
    if (error) {
      throw error;
    }

    setTasks(data);
    setLoading(false);
  };

  /**
   * Create a new memory/task in the database
   * @param {Object} params - Creation parameters
   * @param {string} params.tableName - Name of the database table
   * @param {Object} params.payload - Data to insert
   */
  const createMemory = async ({ tableName, payload }) => {
    try {
      setAdding(true);
      const userID = user?.id;

      // Insert new memory with user ID
      const { error, data } = await client
        .from(tableName)
        .insert([
          {
            ...payload,
            user_uid: userID,
          },
        ])
        .select();
      if (error) {
        throw error;
      }
      if (data) {
        setTasks([...tasks, ...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  /**
   * Delete a memory/task from the database
   * @param {Object} params - Deletion parameters
   * @param {string} params.tableName - Name of the database table
   * @param {string|number} params.id - ID of the item to delete
   */
  const deleteMemory = async ({ tableName, id }) => {
    try {
      const userID = user?.id;
      // Delete memory and ensure user owns it
      const { data, error } = await client
        .from(tableName)
        .delete()
        .eq("id", id)
        .eq("user_uid", userID)
        .select();
      if (error) {
        throw error;
      }
      if (data) {
        setTasks(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  /**
   * Update an existing memory/task in the database
   * @param {Object} params - Update parameters
   * @param {string} params.tableName - Name of the database table
   * @param {string|number} params.id - ID of the item to update
   * @param {Object} params.payload - Updated data
   */
  const updateMemory = async ({ tableName, id, payload }) => {
    try {
      setAdding(true);
      const userID = user?.id;
      // Update memory and ensure user owns it
      const { data, error } = await client
        .from(tableName)
        .update(payload)
        .eq("id", id)
        .eq("user_uid", userID)
        .select();
      if (error) {
        throw error;
      }
      if (data) {
        setTasks(tasks.map((task) => (task.id === id ? data[0] : task)));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        adding,
        loading,
        getTasks,
        createMemory,
        deleteMemory,
        updateMemory,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
