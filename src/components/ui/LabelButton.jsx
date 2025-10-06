import { getButtonProps } from "./GetButtonProps";

/**
 * Label button component that renders as a clickable label with button styling
 * @param {Object} props - Component props
 * @param {string} props.htmlFor - ID of the form element this label is associated with
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} Styled label element that looks like a button
 */
function LabelButton(props) {
  return (
    <label htmlFor={props.htmlFor} className={getButtonProps(props).className}>
      {props.children}
    </label>
  );
}

export default LabelButton;
