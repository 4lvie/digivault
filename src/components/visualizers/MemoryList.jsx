/**
 * MemoryList component displays a list of memory tasks as cards.
 * Fetches tasks from context on mount and shows loading, empty, or grid states.
 * Allows viewing details of a selected memory in a modal.
 *
 * @component
 * @returns {JSX.Element} The rendered memory list UI.
 *
 * @example
 * <MemoryList />
 */
import { useTask } from "../../context/TaskContext.jsx";
import { useEffect, useState } from "react";
import { CONSTS } from "../../constants/Constants.jsx";
import MemoryCard from "../ui/MemoryCard.jsx";
import MemoryDetailModal from "../forms/MemoryDetailModal.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import Loading from "../ui/Loading.jsx";

function MemoryList({ onEdit }) {
  // Fetch tasks from context
  const { tasks, getTasks, loading } = useTask();
  const [selectedTask, setSelectedTask] = useState(null);
  const user = useAuth();

  // Fetch tasks on component mount
  useEffect(() => {
    if (user) getTasks({ tableName: CONSTS.MEMORIES });
  }, [user]);

  return (
    // Main container for the memory list
    <div className="relative w-full">
      {loading ? (
        // Loading state
        <div className="flex justify-center py-10">
          <Loading />
        </div>
      ) : // Empty state
      tasks.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <h3>No memories found</h3>
        </div>
      ) : (
        // Grid of memory cards
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full">
          {tasks.map((task) => (
            <MemoryCard key={task.id} task={task} onClick={setSelectedTask} />
          ))}
        </div>
      )}

      {selectedTask && (
        // Memory detail modal
        <MemoryDetailModal
          task={selectedTask}
          // Close modal handler
          onClose={() => setSelectedTask(null)}
          onEditDetail={onEdit}
        />
      )}
    </div>
  );
}

export default MemoryList;
