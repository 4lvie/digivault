function MemoryCard({task}) {

    const handleDelete = () => {
        alert("Delete " + task.item_name);
    }

    const toggleDone = () => {
        alert("Toggle done " + task.item_name);
    }

  return (
    <div>
      <ul>
        <li>{task.id}, {task.item_name}</li>
      </ul>
        <div className="space-x-2 space-y-2">
            <button className="btn btn-error" onClick={handleDelete}>
                Delete
            </button>
            <button className="btn btn-edit" onClick={toggleDone}>
                Edit
            </button>
        </div>
    </div>
  );
}

export default MemoryCard;