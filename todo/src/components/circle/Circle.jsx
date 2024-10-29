import "../circle/Circle.css";

export default function Circle({ level, color }) {
  return (
    <div className="Circle" style={{ backgroundColor: color }}>
      {level && <span>{level}</span>}
    </div>
  );
}
