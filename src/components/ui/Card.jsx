// Shadow intensity mappings
const shadows = {
  sm: "shadow-sm",
  md: "shadow",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

/**
 * Card container component with configurable shadow and hover effects
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className=""] - Additional CSS classes
 * @param {boolean} [props.hoverable=false] - Whether to show hover effects
 * @param {string} [props.shadow='xl'] - Shadow intensity (sm, md, lg, xl)
 * @param {function} [props.onClick] - Click handler function
 * @returns {JSX.Element} Styled card container
 */
function Card({
  children,
  className = "",
  hoverable = false,
  shadow = "xl",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`card ${shadows[shadow]} ${className} ${
        hoverable ? "hover:shadow-lg transition cursor-pointer" : ""
      }`.trim()}
    >
      {children}
    </div>
  );
}

export default Card;
