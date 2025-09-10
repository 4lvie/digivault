function Button({ content = null, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`btn cursor pointer aspect-square w-30 h-30 p-0 overflow-hidden rounded-md shadow-md transition ${isSelected ? "animate-pulse ring-2 ring-pink-300" : "hover:scale-105"}`}>
      <img
        src={content}
        alt=""
        className="w-full h-full object-cover"
      />
    </button>
  );
}

export default Button;
