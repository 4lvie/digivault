import { useTask } from "../context/TaskContext";
import { CONSTS }  from "../constants/constants";
import { useState } from "react";

function MemoryCard({task}) {
  const { deleteTask } = useTask();
  const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);
        await deleteTask({tableName: CONSTS.MEMORIES, id: task.id});
        setDeleting(false);
    };

    const toggleDone = () => {
        alert("Toggle done " + task.item_name);
    }

  return (
    <div>
      <ul>
        <li>{task.id}, {task.item_name}</li>
      </ul>
        <div className="space-x-2 space-y-2">
            <button className="btn btn-error" onClick={handleDelete} disabled={deleting}>
                {deleting ? "Deleting..." : "Delete"}
            </button>
            <button className="btn btn-edit" onClick={toggleDone}>
                Edit
            </button>
        </div>
    </div>
  );
}

export default MemoryCard;