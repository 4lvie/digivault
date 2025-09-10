import React from "react";  
import { useState } from "react";
import { client } from "../supabase/client";

function TaskForm() {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = async (e) => {
        try {
            const client_user = await client.auth.getUser();
            console.log(client_user);

            e.preventDefault();
            const result = await client.from('memories_test').insert([{
                item_name: taskName,
                user_uid: client_user.data.user.id
            }]);
            console.log(result);
        } catch (error) {
            console.error("Error adding task:", error);
        }
        setTaskName("");
    };

  return (
    <form className="space-x-2">
        <input type="text" placeholder="Write a Task Name" className="input input-md" 
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
        <button className="btn btn-info" type="submit" onClick={handleSubmit}>
          Add Task
        </button>
    </form>
    
  );
}
export default TaskForm;