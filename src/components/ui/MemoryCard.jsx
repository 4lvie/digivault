import Card from "./Card";

/**
 * Memory card component that displays a single memory item as a clickable card
 * @param {Object} props - Component props
 * @param {Object} props.task - Memory object with item details (name, image, etc.)
 * @param {function} props.onClick - Function called when card is clicked, receives task as argument
 * @returns {JSX.Element} Clickable card showing memory image or name placeholder
 */
function MemoryCard({ task, onClick }) {
  // Render the memory card with image or placeholder text
  return (
    // Clickable card container
    <Card
      onClick={() => onClick(task)}
      hoverable
      shadow="md"
      className="sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border border-gray-200 flex items-center justify-center bg-white"
    >
      {task.item_image ? (
        <img
          src={task.item_image}
          alt={task.item_name}
          className="object-cover w-full h-full rounded-xl"
        />
      ) : (
        // Placeholder text when no image is available
        <p className="w-full overflow-hidden text-ellipsis text-s font-bold text-gray-400">
          {task.item_name}
        </p>
      )}
    </Card>
  );
}

export default MemoryCard;
