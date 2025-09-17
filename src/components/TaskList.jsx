import { useTask } from "../context/TaskContext";
import { useEffect } from "react";
import MemoryCard from "./MemoryCard";
import { CONSTS } from "../constants/constants";

function TaskList() {
  const { tasks, getTasks, loading } = useTask();
  console.log(tasks);

  useEffect(() => {
    getTasks({ tableName: CONSTS.MEMORIES_TEST });
  }, []);

  function renderTasks() {
    if (loading) {
      return (
        <span className="loading loading-dots text-info loading-lg">
          Loading...
        </span>
      );
    } else if (tasks.length === 0) {
      return <h3>No tasks found</h3>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <MemoryCard key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }

  return (
    <div className="space-y-4">
      <h2>Task List</h2>
      {renderTasks()}
    </div>
  );
}

export default TaskList;
