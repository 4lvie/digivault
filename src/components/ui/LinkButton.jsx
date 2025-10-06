import { getButtonProps } from "./GetButtonProps";
import { Link } from "react-router";

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
