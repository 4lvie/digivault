// Button color variant mappings
const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  neutral: "btn-neutral",
};

// Button style type mappings
const types = {
  outline: "btn-outline",
  soft: "btn-soft",
  dash: "btn-dash",
  active: "btn-active",
  ghost: "btn-ghost",
  link: "btn-link",
};

/**
 * Utility function that generates button CSS classes based on props
 * @param {Object} props - Button configuration options
 * @param {string|null} [props.variant=null] - Button color variant
 * @param {string|null} [props.type=null] - Button style type
 * @param {boolean} [props.isWide=false] - Whether button should be wide
 * @param {boolean} [props.square=false] - Whether button should be square
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {Object} Object with generated className property
 */
export function getButtonProps({
  variant = null,
  type = null,
  isWide = false,
  square = false,
  className = "",
}) {
  return {
    className: `btn ${variant ? variants[variant] : ""} ${
      type ? `${types[type]}` : ""
    } ${isWide ? `btn-wide` : ""} ${
      square ? "btn-square" : ""
    } ${className}`.trim(),
  };
}
