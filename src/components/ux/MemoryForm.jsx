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
import { useState } from "react";
import { useTask } from "../../context/TaskContext";

function MemoryForm({ initialData = null }) {
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
  };

  // Handle form submission
  const saveMemory = async (e) => {
    e.preventDefault();
    const payload = {
      item_name: memoryName,
      item_location: memoryLocation,
      item_desc: memoryDetails,
      item_obtained_date: memoryDate,
      item_image: memoryImage ? await memoryImage : null,
    };

    if (initialData && initialData.id) {
      await updateMemory(initialData.id, payload);
    } else {
      await createMemory({ tableName: CONSTS.MEMORIES, payload });
    }

    await createMemory({ tableName: CONSTS.MEMORIES, payload: payload });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    resetForm();
  };

  return (
    // Main container
    <div>
      {/* Button to open modal */}
      <label
        htmlFor="memoryform"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        New Item
      </label>

      {/* Modal structure */}
      <input type="checkbox" id="memoryform" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {/* Form title */}
          <h3 className="font-bold text-lg">New Memory</h3>
          <form className="space-y-2 mt-4">
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
                />
                <textarea
                  // Memory Details
                  placeholder="Memory Details"
                  className="textarea textarea-bordered"
                  value={memoryDetails}
                  onChange={(e) => setMemoryDetails(e.target.value)}
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
              />
            </fieldset>
          </div>
          {/* Modal action buttons */}
          <div className="modal-action">
            <button
              // Add Memory button
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition space-y-2 w-full"
              onClick={saveMemory}
              disabled={adding}
            >
              {adding ? "Adding Memory..." : "Add Memory"}
            </button>
            <label
              // Close button
              htmlFor="memoryform"
              className="px-6 py-3 bg-gray-400 text-white rounded-xl shadow-md hover:bg-gray-700 transition"
              onClick={resetForm}
            >
              Close
            </label>
          </div>
          {showToast && (
            <div className="toast toast-center toast-middle">
              <div className="alert alert-success">
                <span>New memory saved</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemoryForm;
