import "../todo/Todo.css";

/* eslint-disable react/prop-types */

export default function Todo({ todo }) {
  return (
    <div className="Todo">
      <div className="header">
        <h1>{todo.title}</h1>
        <div className="options">
          <button>Edit</button>
          <button>Mark Complete</button>
        </div>
      </div>
      <p>Due Date: {todo.dueDate}</p>
      <p>Priority: {todo.priority}</p>
      <p>Complexity: {todo.complexity}</p>
      <div className="tags">
        <span>tag1</span>
        <span>tag2</span>
      </div>
    </div>
  );
}
