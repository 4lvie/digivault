function MemoryForm() {
  return (
    <div>
      <label htmlFor="memoryform" className="btn btn-primary">
        New Item
      </label>

      <input type="checkbox" id="memoryform" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New Item</h3>
          <form className="space-y-4 mt-4">
            <div>
              <input
                type="text"
                id="item-name"
                placeholder="Item Name"
                className="input input-bordered"
              />
              <button type="submit" className="btn btn-primary ml-2">
                save
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="memoryform" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryForm;
