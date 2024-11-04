import "../circle/Circle.css";

export default function Circle({
  level,
  color,
  handleSelect,
  currentLevel,
  name,
  setLevel,
  size,
}) {
  return (
    <div
      className={`Circle `}
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {level && (
        <span
          className={`${level === currentLevel ? "Selected" : ""}`}
          id={level}
          onClick={(e) => {
            handleSelect(e);
            setLevel(name, e.target.id);
          }}
        >
          {level}
        </span>
      )}
    </div>
  );
}
