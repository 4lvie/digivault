import { getButtonProps } from "./GetButtonProps";
import { Link } from "react-router";

/**
 * Button component that renders as a React Router Link with button styling
 * @param {Object} props - Component props
 * @param {string} [props.type="link"] - Button type styling
 * @param {string} props.to - Navigation target path
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} Styled link that looks like a button
 */
function LinkButton({ type = "link", ...props }) {
  return (
    <Link
      to={props.to}
      className={getButtonProps({ type, ...props }).className}
    >
      {props.children}
    </Link>
  );
}

export default LinkButton;
