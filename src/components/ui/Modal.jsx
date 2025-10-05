function Modal({ children, onClose, containerClassName = "", id, ref }) {
    return (
      <dialog onClose={onClose} className="modal" id={id} ref={ref}>
        <div className={`modal-box ${containerClassName}`}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>);
}

export default Modal;