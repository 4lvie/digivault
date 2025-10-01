/**
 * MemoryDetailModal Component
 * Displays detailed information about a memory item in a modal.
 * Uses Framer Motion for smooth animations.
 *
 * Props:
 * - task: The memory item object containing details like name, description, image, location, and date.
 * - onClose: Function to close the modal.
 *
 * @component
 * @returns {JSX.Element} The rendered memory detail modal.
 *
 * @usage
 * <MemoryDetailModal task={selectedTask} onClose={handleClose} />
 *
 * Note: Ensure that Framer Motion is installed in your project.
 */
import { motion, AnimatePresence } from "framer-motion";
import { useTask } from "../../context/TaskContext";
import { useState } from "react";
import { CONSTS } from "../../constants/Constants";
import Button from "../ui/Button";

function MemoryDetailModal({ task, onClose, onEditDetail }) {
  const { deleteMemory } = useTask();
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  // Handler for editing the memory
  const onEdit = () => {
    if (onEditDetail) {
      onEditDetail(task);
    }
    onClose(); // Close the detail modal
  };

  // Handler for deleting the memory
  const handleDelete = () => {
    setDeleteConfirmed(true);
  };

  const confirmDelete = () => {
    deleteMemory({ tableName: CONSTS.MEMORIES, id: task.id });
    setDeleteConfirmed(false);
    onClose();
  };

  const cancelDelete = () => {
    setDeleteConfirmed(false);
  };

  // Render the modal only if a task is provided
  return (
    // AnimatePresence for handling component mount/unmount animations
    <AnimatePresence>
      {task && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <motion.div
            // Modal container with animation
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[85vh] flex flex-col items-center p-8 overflow-y-auto"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              onClick={onClose}
              className="absolute top-4 right-4"
            >
              ✕
            </Button>

            <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
              {task.item_name || "Untitled"}
            </h2>
            {/* Image */}
            <div className="w-full flex justify-center mb-6">
              <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center w-[500px] h-[400px]">
                {task.item_image ? (
                  <img
                    src={task.item_image}
                    alt={task.item_name}
                    className="object-contain w-23/24 h-23/24"
                  />
                ) : (
                  <span className="text-gray-400 text-lg">No Image</span>
                )}
              </div>
            </div>
            {/* Details: Description, Location, Date */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-3/4 space-y-4 text-gray-700">
              <p className="text-lg">
                <strong className="text-blue-700">📖 Description:</strong>{" "}
                {task.item_desc || "No description available"}
              </p>
              <p className="text-lg">
                <strong className="text-blue-700">📍 Location:</strong>{" "}
                {task.item_location || "Unknown"}
              </p>
              <p className="text-lg">
                <strong className="text-blue-700">📅 Date:</strong>{" "}
                {task.item_obtained_date || "Unknown"}
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="primary"
                onClick={() => onEdit(task)}
                className="px-6 py-3 mt-4"
              >
                Edit Memory
              </Button>
              <Button
                variant="secondary"
                className="px-6 py-3 mt-4"
                onClick={() => handleDelete(task)} // callback to delete the memory
              >
                Delete Memory
              </Button>
            </div>
            {/* Confirm Delete Popup */}
            {deleteConfirmed && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-60">
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-red-600 mb-4">
                    Confirm Deletion
                  </h3>
                  <p className="mb-6 text-gray-700 text-center">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">{task.item_name}</span>?
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="error"
                      onClick={confirmDelete}
                      className="px-6 py-3"
                    >
                      Yes, Delete
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={cancelDelete}
                      className="px-6 py-3"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MemoryDetailModal;
