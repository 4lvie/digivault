import Dropzone from "./Dropzone";
import { client } from "../../../supabase/client";
import { CONSTS } from "../../../constants/Constants";
import { useState } from "react";
import { useTask } from "../../../context/TaskContext";

function MemoryForm() {
  const [memoryName, setMemoryName] = useState("");
  const [memoryDetails, setMemoryDetails] = useState("");
  const [memoryDate, setMemoryDate] = useState("");
  const [memoryLocation, setMemoryLocation] = useState("");
  const [memoryImage, setMemoryImage] = useState("");

  const { createMemory, adding } = useTask();

  const saveMemory = async (e) => {
    e.preventDefault();
    const payload = {
      item_name: memoryName,
      item_location: memoryLocation,
      item_desc: memoryDetails,
      item_obtained_date: memoryDate,
      item_image: memoryImage ? await memoryImage : null,
    };

    setMemoryName("");
    setMemoryDetails("");
    setMemoryDate("");
    setMemoryImage("");
    setMemoryLocation("");
    console.log(payload.item_image);
    await createMemory({ tableName: CONSTS.MEMORIES, payload: payload });
  };

  return (
    <div>
      <label htmlFor="memoryform" className="btn btn-primary">
        New Item
      </label>

      <input type="checkbox" id="memoryform" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New Memory</h3>
          <form className="space-y-2 mt-4">
            <div className="flex space-y-0 md:space-y-0 md:space-x-4">
              <Dropzone onChange={setMemoryImage} />
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  id="item-name"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  value={memoryName}
                  onChange={(e) => setMemoryName(e.target.value)}
                />
                <textarea
                  placeholder="Memory Details"
                  className="textarea textarea-bordered"
                  value={memoryDetails}
                  onChange={(e) => setMemoryDetails(e.target.value)}
                ></textarea>
              </div>
            </div>
          </form>
          <div className="mt-4 w-full">
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
          <div className="modal-action">
            <button
              className="btn btn-primary flex-1 space-y-2 w-full"
              onClick={saveMemory}
              disabled={adding}
            >
              {adding ? "Adding Memory..." : "Add Memory"}
            </button>
            <label htmlFor="memoryform" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryForm;
