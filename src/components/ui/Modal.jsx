import { motion, AnimatePresence } from "framer-motion";

function Modal({ children, open = false, onClose, containerClassName = "" }) {
    return <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={onClose} // Close modal when clicking on the overlay
        >
          <motion.div
            // Modal container with animation
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-2xl flex flex-col items-center p-8 overflow-y-auto ${containerClassName}`.trim()}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold cursor-pointer"
            >
              ✕
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>;
}

export default Modal;