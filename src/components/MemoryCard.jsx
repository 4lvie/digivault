// MemoryCard.jsx
function MemoryCard({ task, onClick }) {
  return (
    <div
      onClick={() => onClick(task)}
      className="w-32 h-32 rounded-xl shadow-md border border-gray-200 flex items-center justify-center bg-white hover:shadow-lg transition cursor-pointer"
    >
      {task.item_image ? (
        <img
          src={task.item_image}
          alt={task.item_name}
          className="object-cover w-full h-full rounded-xl"
        />
      ) : (
        <span className="text-xs text-gray-400">No Image</span>
      )}
    </div>
  );
}

export default MemoryCard;
