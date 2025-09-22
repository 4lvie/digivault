import { useTask } from "../context/TaskContext.jsx";
import { useEffect, useState } from "react";
import { CONSTS } from "../constants/Constants.jsx";
import MemoryCard from "./MemoryCard.jsx";
import MemoryDetailModal from "./ux/ui/MemoryDetailModal.jsx";

function TaskList() {
  const { tasks, getTasks, loading } = useTask();
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    getTasks({ tableName: CONSTS.MEMORIES });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative bg-blue-50 border border-blue-200 shadow-xl rounded-2xl p-8 w-11/12 md:w-4/5 lg:w-3/4">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">
          My Vault
        </h2>

        {loading ? (
          <span className="loading loading-dots text-info loading-lg">
            Loading...
          </span>
        ) : tasks.length === 0 ? (
          <h3>No tasks found</h3>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {tasks.map((task) => (
              <MemoryCard key={task.id} task={task} onClick={setSelectedTask} />
            ))}
          </div>
        )}

        {/* Modal con animación */}
        {selectedTask && (
          <MemoryDetailModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
      </div>
    </div>
  );
}

export default TaskList;
