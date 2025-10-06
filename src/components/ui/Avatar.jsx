import defaultAvatar from "../../assets/default-avatar.png";

// Size mappings for avatar dimensions
const sizes = {
  xs: "w-8",
  lg: "w-16",
  xl: "w-24",
};

/**
 * Avatar component that displays user profile images with fallback
 * @param {Object} props - Component props
 * @param {string|null} props.src - Image source URL, falls back to default avatar if null
 * @param {string} [props.className=""] - Additional CSS classes
 * @param {function} [props.onClick] - Click handler function
 * @param {string} [props.size="xs"] - Avatar size (xs, lg, xl)
 * @returns {JSX.Element} Circular avatar image
 */
function Avatar({ src = null, className = "", onClick, size = "xs" }) {
  return (
    <img
      src={src ? src : defaultAvatar}
      className={`${sizes[size]} rounded-full object-fit ${className}`.trim()}
      onClick={onClick}
    />
  );
}

export default Avatar;
