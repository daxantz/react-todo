import { useState, useEffect } from "react";
import "../todo/Todo.css";

export default function Todo({ todo, handleClick, handleEditTodo, todos }) {
  const [isComplete, setIsComplete] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);
  function markComplete() {
    setIsComplete((previous) => !previous);
  }
  useEffect(() => {
    console.log(todos);
    if (todos) {
      let currentTodo = todos.find((t) => t.id === todo.id);
      setCurrentTodo(currentTodo);
      console.log("yeee", currentTodo);
    }
  }, [todos, todo]);
  return (
    <div className={`Todo ${isComplete && "done"}`}>
      <div className="header">
        <h1>{currentTodo.taskName}</h1>
        <div className="options">
          <button onClick={handleEditTodo}>Edit</button>
          <button onClick={markComplete}>Mark Complete</button>
        </div>
      </div>
      <div className="body" onClick={() => handleClick(todo.id)}>
        <p>Due Date: {currentTodo.dueDate}</p>
        <p>Priority: {currentTodo.Priority}</p>
        <p>Complexity: {currentTodo.Complexity}</p>
        <div className="tags">
          {currentTodo.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
