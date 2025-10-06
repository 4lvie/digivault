import { getButtonProps } from "./GetButtonProps";

/**
 * Reusable button component with loading state and variant styling
 * @param {Object} props - Component props
 * @param {function} [props.onClick] - Click handler function
 * @param {boolean} [props.isDisabled] - Whether button is disabled
 * @param {boolean} [props.isLoading] - Whether to show loading spinner
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} Styled button with optional loading state
 */
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={getButtonProps(props).className}
      disabled={props.isDisabled || props.isLoading}
    >
      {props.isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : null}
      {props.children}
    </button>
  );
}

export default Button;
