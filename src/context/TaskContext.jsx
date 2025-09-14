import { createContext, useContext } from "react";
import { useState } from "react";
import { client } from "../supabase/client";

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

  const getTasks = async () => {
    setLoading(true);
    const userID = (await client.auth.getUser()).data.user.id;
    const {error, data} = await client.from("memories_test").select().eq('user_uid', userID);
    if (error) {
      throw error;
    }

    setTasks(data);
    setLoading(false);
  };

  const createTask = async ({taskName, tableName}) => {
    try {
      setAdding(true);
      const client_user = await client.auth.getUser();

      const {error, data} = await client.from(tableName).insert([{
          item_name: taskName,
          user_uid: client_user.data.user.id
      }]).select();
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

  return (
    <TaskContext.Provider value={{tasks, adding, loading, getTasks, createTask}}>
      {children}
    </TaskContext.Provider>
  );
};