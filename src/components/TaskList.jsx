import { useTask } from "../context/TaskContext";
import { useEffect } from "react";
import { CONSTS } from "../constants/Constants";
import MemoryCard from "./MemoryCard";

function TaskList() {
  const { tasks, getTasks, loading } = useTask();
  const fields = "item_image";

  useEffect(() => {
    getTasks({ tableName: CONSTS.MEMORIES, fields: fields });
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="avatar">
              <div className="w-32 rounded shadow-lg border space-y-4 space-x-4">
                {task.item_image ? (
                  <img
                    src={task.item_image}
                    alt="memory"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-200">
                    <span className="text-xs text-gray-500">No Image</span>
                  </div>
                )}
              </div>
            </div>
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
