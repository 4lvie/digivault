import { useTask } from "../../context/TaskContext";
import { useEffect, useRef, useState } from "react";
import { CONSTS } from "../../constants/Constants";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Modal from "../ui/Modal";

//Centralize ID for better understanding
const MODAL_ID = "memory-detail-modal";

/**
 * Modal component that displays detailed information about a memory item
 * Includes options to edit or delete the memory with confirmation
 * @param {Object} props - Component props
 * @param {Object} props.task - Memory object with item details (name, description, image, location, date)
 * @param {function} props.onClose - Function to close the modal
 * @param {function} props.onEditDetail - Function to handle editing the memory
 * @returns {JSX.Element} Memory detail modal with edit/delete actions
 */
function MemoryDetailModal({ task, onClose, onEditDetail }) {
  const deleteModal = useRef(null);

  const { deleteMemory } = useTask();
  // Handler for editing the memory
  const onEdit = () => {
    if (onEditDetail) {
      onEditDetail(task);
    }
    onClose(); // Close the detail modal
  };

  // Handler for deleting the memory
  const handleDelete = () => {
    deleteModal.current.showModal();
  };

  const confirmDelete = () => {
    deleteMemory({ tableName: CONSTS.MEMORIES, id: task.id });
    if (deleteModal.current) {
      deleteModal.current.close();
    }
    onClose();
  };

  const cancelDelete = () => {
    deleteModal.current.close();
  };

  useEffect(() => {
    const modal = document.getElementById(MODAL_ID);

    if (task) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [task]);

  // Render the modal only if a task is provided
  return (
    <>
      <Modal
        id={MODAL_ID}
        onClose={onClose}
        containerClassName="max-w-4xl flex flex-col justify-center items-center"
      >
        <h2 className="break-all text-4xl font-extrabold text-blue-800 mb-6 text-center">
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
        <Card
          shadow="md"
          className="bg-white p-6 w-full md:w-3/4 space-y-4 text-gray-700"
        >
          <p className="break-all text-lg">
            <strong className="text-blue-700">📖 Description:</strong>{" "}
            {task.item_desc || "No description available"}
          </p>
          <p className="break-all text-lg">
            <strong className="text-blue-700">📍 Location:</strong>{" "}
            {task.item_location || "Unknown"}
          </p>
          <p className="text-lg">
            <strong className="text-blue-700">📅 Date:</strong>{" "}
            {task.item_obtained_date || "Unknown"}
          </p>
        </Card>
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
            onClick={() => handleDelete()} // callback to delete the memory
          >
            Delete Memory
          </Button>
        </div>
      </Modal>
      {/* Confirm Delete Popup */}
      <Modal
        ref={deleteModal}
        onClose={cancelDelete}
        containerClassName="max-w-lg flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center">
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
            <Button onClick={cancelDelete} className="px-6 py-3">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MemoryDetailModal;
