import { createContext, useContext } from "react";
import { useState } from "react";
import { client } from "../supabase/client";
import { useAuth } from "./AuthContext";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  // Fetch tasks from Supabase

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

  const createMemory = async ({ tableName, payload }) => {
    try {
      setAdding(true);
      const userID = user?.id;

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

  const deleteMemory = async ({ tableName, id }) => {
    try {
      const userID = user?.id;
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

  const updateMemory = async ({ tableName, id, payload }) => {
    try {
      setAdding(true);
      const userID = user?.id;
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
