import Circle from "../circle/Circle";
import "../levelselector/LevelSelector.css";
import { useState } from "react";
export default function LevelSelector({ level = 10, setLevel, name }) {
  const [currentLevel, setCurrentLevel] = useState();

  function handleSelect(e) {
    setCurrentLevel(parseInt(e.target.id));
    console.log(e.target.id);
  }

  return (
    <div className="LevelSelector">
      <p>Select {name} level</p>
      <div className="levels">
        {Array.from({ length: level }).map((level, index) => (
          <Circle
            key={index}
            level={index + 1}
            color={currentLevel === index + 1 ? "#0D99FF" : "#0D99FF1A"}
            handleSelect={handleSelect}
            currentLevel={currentLevel}
            name={name}
            setLevel={setLevel}
          />
        ))}
      </div>
    </div>
  );
}
