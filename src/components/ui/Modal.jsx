/**
 * Modal dialog component with backdrop and close functionality
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Modal content
 * @param {function} [props.onClose] - Function called when modal is closed
 * @param {string} [props.containerClassName=""] - Additional classes for modal container
 * @param {string} [props.id] - Modal element ID for programmatic control
 * @param {React.Ref} [props.ref] - React ref for direct DOM access
 * @returns {JSX.Element} Modal dialog with close button and backdrop
 */
function Modal({ children, onClose, containerClassName = "", id, ref }) {
  return (
    <dialog onClose={onClose} className="modal" id={id} ref={ref}>
      <div className={`modal-box ${containerClassName}`}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
