import { motion, AnimatePresence } from "framer-motion";

function MemoryDetailModal({ task, onClose }) {
  return (
    <AnimatePresence>
      {task && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[85vh] flex overflow-hidden"
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-hidden">
              {task.item_image ? (
                <img
                  src={task.item_image}
                  alt={task.item_name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Detalles */}
            <div className="flex-1 p-8 overflow-y-auto">
              <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
                {task.item_name || "Untitled"}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {task.item_desc || "No description available."}
              </p>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-2">
                  📍 <strong>Location:</strong>{" "}
                  {task.item_location || "Unknown"}
                </p>
                <p className="flex items-center gap-2">
                  📅 <strong>Date:</strong>{" "}
                  {task.item_obtained_date || "Unknown"}
                </p>
              </div>

              {/* Botón extra de acción */}
              <div className="mt-8">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MemoryDetailModal;
