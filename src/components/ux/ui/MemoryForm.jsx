import Dropzone from "./Dropzone";

function MemoryForm() {
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
              <Dropzone />
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  id="item-name"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
                <textarea
                  placeholder="Memory Details"
                  className="textarea textarea-bordered"
                ></textarea>
              </div>
            </div>
          </form>

          <div className="mt-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Item Date</legend>
              <input type="date" className="input w-full" />
            </fieldset>
          </div>
          <div className="modal-action">
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
