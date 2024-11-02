import { useState } from "react";
import "../todo/Todo.css";

export default function Todo({ todo, handleClick, handleEditTodo }) {
  const [isComplete, setIsComplete] = useState(false);

  function markComplete() {
    setIsComplete((previous) => !previous);
  }

  return (
    <div className={`Todo ${isComplete && "done"}`}>
      <div className="header">
        <h1>{todo.taskName}</h1>
        <div className="options">
          <button onClick={handleEditTodo}>Edit</button>
          <button onClick={markComplete}>Mark Complete</button>
        </div>
      </div>
      <div className="body" onClick={() => handleClick(todo.id)}>
        <p>Due Date: {todo.dueDate}</p>
        <p>Priority: {todo.Priority}</p>
        <p>Complexity: {todo.Complexity}</p>
        <div className="tags">
          {todo.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
