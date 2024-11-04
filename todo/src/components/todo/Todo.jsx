import { useState, useEffect } from "react";
import "../todo/Todo.css";
import Up from "../icons/Up";
import Calendar from "../icons/Calendar";
import Move from "../icons/Move";
import Edit from "../icons/Edit";
import Check from "../icons/Check";
import Circle from "../circle/Circle";
const tagColors = ["#ECFFE8", "#FFF6E8", "#E8FEFF"];
export default function Todo({
  todo,
  handleClick,
  handleEditTodo,
  todos,
  todoId,
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);
  const [differenceInDays, setDifferenceInDays] = useState();
  function markComplete() {
    setIsComplete((previous) => !previous);
  }

  useEffect(() => {
    console.log(todos);
    if (todos) {
      let currentTodo = todos.find((t) => t.id === todoId);
      setCurrentTodo(currentTodo);
      console.log("current todo", currentTodo);
    }
    function calcDate() {
      const targetDate = new Date(currentTodo.dueDate);
      const today = new Date();
      const differenceInTime = targetDate - today;

      const differenceInDays = Math.ceil(
        differenceInTime / (1000 * 60 * 60 * 24)
      );
      setDifferenceInDays(differenceInDays);
    }
    calcDate();
  }, [todos, todoId, todo, currentTodo.dueDate]);
  return (
    <div className={`Todo ${isComplete && "done"}`}>
      <div className="header">
        <div className="todo-name">
          <Circle
            color={
              differenceInDays <= 1
                ? "red"
                : differenceInDays <= 3
                ? "#FE7E08"
                : "#0D99FF"
            }
            size={10}
            width={10}
            height={10}
          />
          <h1>{currentTodo.taskName}</h1>
        </div>

        <div className="options" style={{ display: "flex", gap: "1rem" }}>
          <Edit handleEditTodo={handleEditTodo} />
          <Check markComplete={markComplete} />
        </div>
      </div>
      <div className="body" onClick={() => handleClick(todo.id)}>
        <p className="info-text">
          <Calendar />
          <span className={`info-span`}>Due Date:</span>{" "}
          <span
            style={{
              color: `${
                differenceInDays <= 1
                  ? "red"
                  : differenceInDays <= 3 && "#FE7E08"
              }`,
            }}
          >{`${currentTodo.dueDate}, ${currentTodo.time}`}</span>
        </p>
        <p className="info-text">
          <Up />
          <span className="info-span">Priority:</span>{" "}
          {currentTodo.Priority <= 5
            ? "Low"
            : currentTodo.Priority >= 9
            ? "High"
            : "Medium"}{" "}
          {`(${currentTodo.Priority}/10)`}
        </p>
        <p className="info-text">
          <Move />
          <span className="info-span">Complexity:</span>{" "}
          {currentTodo.Complexity <= 5
            ? "Low"
            : currentTodo.Complexity >= 9
            ? "High"
            : "Medium"}{" "}
          {`(${currentTodo.Complexity}/10)`}
        </p>
        <div className="tags">
          {/* {currentTodo.tags.map((tag) => (
            <Circle
              key={tag}
              level={tag}
              color={"red"}
              width={50}
              styles={{ padding: "6px 8px" }}
            />
            <span key={tag}>{tag}</span>
            
          ))} */}
          {Array.isArray(currentTodo.tags) ? (
            currentTodo.tags.map((tag) => (
              <span
                style={{
                  backgroundColor: `${
                    tagColors[Math.floor(Math.random() * tagColors.length)]
                  }`,
                }}
                className="tag"
                key={tag}
              >
                {tag}
              </span>
            ))
          ) : (
            <span>No tags available</span> // Fallback if tags are not an array
          )}
        </div>
      </div>
    </div>
  );
}
