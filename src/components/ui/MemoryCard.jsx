/**
 * MemoryCard Component displays a single memory task as a card.
 * Handles click events to view memory details.
 *
 * @component
 * @returns {JSX.Element} The rendered memory card UI.
 *
 * @example
 * <MemoryCard />
 */

import Card from "./Card";

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
        <span className="text-xs text-gray-400">No Image</span>
      )}
    </Card>
  );
}

export default MemoryCard;
