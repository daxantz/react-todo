import { useContext } from "react";
import "../todo/Todo.css";
import Up from "../icons/Up";
import Calendar from "../icons/Calendar";
import Move from "../icons/Move";
import Edit from "../icons/Edit";
import Check from "../icons/Check";
import Circle from "../circle/Circle";
import { Link } from "react-router-dom";
import { calcDate } from "../../../../utils";
import { TodoContext } from "../../contexts/todoContext";
import Progress from "../progressbar/Progress";
const tagColors = ["#ECFFE8", "#FFF6E8", "#E8FEFF"];
export default function Todo({ todoId, page }) {
  const { todos, completeTodo } = useContext(TodoContext);

  let currentTodo = todos.find((todo) => todo.id === todoId);
  if (!currentTodo) return <div>Todo not found</div>;
  let differenceInDays = calcDate(currentTodo.dueDate);
  let totalSubtasks = currentTodo.subtasks.length;
  let completedSubtasks = currentTodo.subtasks.filter(
    (task) => task.isCompleted === true
  );
  let percentageCompleted = Math.floor(
    (completedSubtasks.length / totalSubtasks) * 100
  );
  function markComplete() {
    completeTodo(todoId);
  }

  return (
    <div className={`Todo ${currentTodo.isCompleted && "done"}`}>
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
          <h1>
            <Link to={`/todos/${currentTodo.id.toString()}`}>
              {currentTodo.taskName}
            </Link>
          </h1>
        </div>

        <div className="options" style={{ display: "flex", gap: "1rem" }}>
          <Link to={`/todos/edit/${currentTodo.id}`}>
            <Edit />
          </Link>

          <Check markComplete={markComplete} />
        </div>
      </div>
      <div className="body">
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
        {page === "details" && <Progress progress={percentageCompleted} />}
        {page === "main" && (
          <div className="tags">
            {currentTodo.tags ? (
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
              <span>No tags available</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
