import { useState } from "react";
import { useTask } from "../context/TaskContext";
import { CONSTS } from "../constants/Constants";

function TaskForm() {
  const [memoryName, setMemoryName] = useState("");
  const { createMemory, adding } = useTask();

  const payload = { item_name: memoryName };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMemoryName("");
    await createMemory({ tableName: CONSTS.MEMORIES_TEST, payload: payload });
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
