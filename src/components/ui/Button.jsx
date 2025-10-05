import { getButtonProps } from "./GetButtonProps";

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
