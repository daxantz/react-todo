import "../circle/Circle.css";

export default function Circle({
  level,
  color,
  handleSelect,
  currentLevel,
  name,
  setLevel,
  styles,
  width,
  height,
}) {
  return (
    <div
      className={`Circle `}
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
        padding: styles?.padding,
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
