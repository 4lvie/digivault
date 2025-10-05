const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  link: "btn-link",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  neutral: "btn-neutral",
};

const types = {
  outline: "btn-outline",
  soft: "btn-soft",
  dash: "btn-dash",
  active: "btn-active",
  ghost: "btn-ghost",
  link: "btn-link",
};

export function getButtonProps({
  variant = null,
  type = null,
  isWide = false,
  className = "",
}) {
  return {
    className: `btn ${variant ? variants[variant] : ""} ${
      type ? `${types[type]}` : ""
    } ${isWide ? `btn-wide` : ""} ${className}`.trim(),
  };
}
