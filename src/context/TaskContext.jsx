import { createContext, useContext } from "react";
import { useState } from "react";
import { client } from "../supabase/client";
import { CONSTS } from "../constants/constants";

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

  // Fetch tasks from Supabase

  const getTasks = async ({ tableName }) => {
    setLoading(true);
    const userID = (await client.auth.getUser()).data.user.id;
    const { error, data } = await client
      .from(tableName)
      .select()
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
      const userID = (await client.auth.getUser()).data.user.id;

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

  const deleteTask = async ({ tableName, id }) => {
    try {
      const userID = (await client.auth.getUser()).data.user.id;
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

  return (
    <TaskContext.Provider
      value={{ tasks, adding, loading, getTasks, createMemory, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
