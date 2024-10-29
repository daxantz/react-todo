import Circle from "../circle/Circle";
import "../levelselector/LevelSelector.css";
export default function LevelSelector({ text, level = 10 }) {
  return (
    <div className="LevelSelector">
      <p>Select {text} level</p>
      <div className="levels">
        {Array.from({ length: level }).map((level, index) => (
          <Circle key={index} level={index + 1} color={"#0D99FF"} />
        ))}
      </div>
    </div>
  );
}
