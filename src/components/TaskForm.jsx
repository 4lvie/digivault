import React from "react";
import { useState } from "react";
import { useTask } from "../context/TaskContext";
import { CONSTS } from "../constants/constants";

function TaskForm() {
  const [memoryName, setMemoryName] = useState("");
  const { createMemory, adding } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMemoryName("");
    createMemory({ memoryName, tableName: CONSTS.MEMORIES_TEST });
  };

  return (
    <form className="space-x-2 space-y-2">
      <input
        type="text"
        placeholder="Write a Task Name"
        className="input input-md"
        value={memoryName}
        onChange={(e) => setMemoryName(e.target.value)}
      />
      <button
        disabled={adding}
        className="btn btn-info"
        type="submit"
        onClick={handleSubmit}
      >
        {adding ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
export default TaskForm;
