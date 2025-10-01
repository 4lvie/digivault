import { getButtonProps } from "./GetButtonProps";

function LabelButton(props) {
  return (
    <label htmlFor={props.htmlFor} className={getButtonProps(props).className}>
      {props.children}
    </label>
  );
}

export default LabelButton;
