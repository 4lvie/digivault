import defaultAvatar from '../../assets/default-avatar.png';

const sizes = {
    xs: "w-8",
    lg: "w-16",
    xl: "w-24"
}

function Avatar({
    src = null,
    className = "",
    onClick,
    size = "xs"
}) {
    return <img src={src ? src : defaultAvatar} className={`${sizes[size]} rounded-full object-fit ${className}`.trim()} onClick={onClick}/>
}

export default Avatar;