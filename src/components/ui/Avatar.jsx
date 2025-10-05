import defaultAvatar from '../../assets/default-avatar.png';

function Avatar({
    src = null,
    className = "",
    onClick
}) {
    return <img src={src ? src : defaultAvatar} className={`w-8 ${className}`.trim()} onClick={onClick}/>
}

export default Avatar;