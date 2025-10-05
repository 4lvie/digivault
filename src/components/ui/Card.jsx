const shadows = {
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
}

function Card({ children, className = "", hoverable = false, shadow = 'xl', onClick }) {
    return <div onClick={onClick} className={`card ${shadows[shadow]} ${className} ${hoverable ? "hover:shadow-lg transition cursor-pointer" : ""}`.trim()}>{children}</div>;
}

export default Card;