/**
 * MemoryForm Component
 * A form component for adding new memory items.
 * Includes fields for name, details, date, location, and image upload.
 * Utilizes a modal for better user experience.
 *
 * @component
 * @returns {JSX.Element} The rendered memory form UI.
 *
 * @example
 * <MemoryForm />
 */
import Dropzone from "./Dropzone";
import { CONSTS } from "../../constants/Constants";
import { useState, useEffect } from "react";
import { useTask } from "../../context/TaskContext";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Toast from "../ui/Toast";

const MODAL_ID = "memoryform";

function MemoryForm({ initialData = null, onClose = null }) {
  // Form state variables
  const [memoryName, setMemoryName] = useState(initialData?.item_name || "");
  const [memoryDetails, setMemoryDetails] = useState(
    initialData?.item_desc || ""
  );
  const [memoryDate, setMemoryDate] = useState(
    initialData?.item_obtained_date || ""
  );
  const [memoryLocation, setMemoryLocation] = useState(
    initialData?.item_location || ""
  );
  const [memoryImage, setMemoryImage] = useState(initialData?.item_image || "");

  // Update form fields if initialData changes (for editing existing memory)
  useEffect(() => {
    if (initialData) {
      setMemoryName(initialData.item_name || "");
      setMemoryDetails(initialData.item_desc || "");
      setMemoryDate(initialData.item_obtained_date || "");
      setMemoryLocation(initialData.item_location || "");
      setMemoryImage(initialData.item_image || "");
    }
  }, [initialData]);

  // Context for task management
  const { createMemory, updateMemory, adding } = useTask();
  const [showToast, setShowToast] = useState(false);

  // Reset form fields
  const resetForm = () => {
    setMemoryName("");
    setMemoryDetails("");
    setMemoryDate("");
    setMemoryImage(null);
    setMemoryLocation("");
    onClose(null); // Notify parent to clear editMemory state
  };

  const isFormValid = memoryName && memoryDetails && memoryDate && memoryLocation;

  // Handle form submission
  const saveMemory = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    const payload = {
      item_name: memoryName,
      item_location: memoryLocation,
      item_desc: memoryDetails,
      item_obtained_date: memoryDate,
      item_image: memoryImage,
    };
    if (initialData && initialData.id) {
      await updateMemory({
        tableName: CONSTS.MEMORIES,
        id: initialData.id,
        payload: payload,
      });
    } else {
      await createMemory({ tableName: CONSTS.MEMORIES, payload: payload });
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    resetForm();
    document.getElementById(MODAL_ID).close();

    if (onClose) {
      onClose(null); // Notify parent to clear editMemory state
    }
  };

  return (
    // Main container
    <div>
      {/* Label to open modal */}
      <Button onClick={() => document.getElementById(MODAL_ID).showModal()} variant="primary" className="px-6 py-3">
        New Memory
      </Button>

      {/* Modal structure */}
      <Modal onClose={resetForm} id={MODAL_ID}>
          {/* Form title */}
          <h3 className="font-bold text-2xl mb-2 text-center text-blue-800">
            {initialData ? "Edit Memory" : "Add New Memory"}
          </h3>
          {/* Memory form */}
          <form className="space-y-2 mt-4" onSubmit={saveMemory}>
            <div className="flex space-y-0 md:space-y-0 md:space-x-4">
              {/* Dropzone for image upload */}
              <Dropzone memoryImage={memoryImage} onChange={setMemoryImage} />
              <div className="flex-1 space-y-2">
                {/* Input fields for memory details */}
                <input
                  // Memory Name
                  type="text"
                  id="item-name"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  value={memoryName}
                  onChange={(e) => setMemoryName(e.target.value)}
                  required
                />
                <textarea
                  // Memory Details
                  placeholder="Memory Details"
                  className="textarea textarea-bordered"
                  value={memoryDetails}
                  onChange={(e) => setMemoryDetails(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </form>
          <div className="mt-4 w-full">
            {/* Item Location */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Item Location</legend>
              <input
                type="text"
                id="item-location"
                placeholder="Item Location"
                className="input input-bordered w-full"
                value={memoryLocation}
                onChange={(e) => setMemoryLocation(e.target.value)}
                required
              />
            </fieldset>
          </div>
          <div className="mt-2 ">
            {/* Item Date */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Item Date</legend>
              <input
                type="date"
                className="input w-full"
                value={memoryDate}
                onChange={(e) => setMemoryDate(e.target.value)}
                required
              />
            </fieldset>
          </div>
          {/* Modal action buttons */}
          <div className="modal-action flex">
            <Button
              variant="primary"
              className="px-6 py-3 flex-1"
              onClick={saveMemory}
              isLoading={adding}
              isDisabled={!isFormValid}
            >
              {initialData
                ? adding
                  ? "Updating..."
                  : "Update Memory"
                : adding
                ? "Adding..."
                : "Add Memory"}
            </Button>
            <Button
              className="py-3 flex-none"
              onClick={() => {
                document.getElementById(MODAL_ID).close();
                resetForm();
              }}
            >
              Cancel
            </Button>
          </div>
      </Modal>
      {showToast && (
        <Toast message="Memory saved"/>
      )}
    </div>
  );
}

export default MemoryForm;
