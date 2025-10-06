/**
 * Toast notification component for displaying success messages
 * @param {Object} props - Component props
 * @param {string} [props.message=""] - Message text to display
 * @returns {JSX.Element} Centered toast notification with success styling
 */
function Toast({ message = "" }) {
  return (
    <div className="toast toast-center toast-middle z-99">
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
