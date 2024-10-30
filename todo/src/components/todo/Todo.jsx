import "../todo/Todo.css";

export default function Todo({ todo }) {
  return (
    <div className="Todo">
      <div className="header">
        <h1>{todo.name}</h1>
        <div className="options">
          <button>Edit</button>
          <button>Mark Complete</button>
        </div>
      </div>
      <p>Due Date: {todo.dueDate}</p>
      <p>Priority: {todo.priority}</p>
      <p>Complexity: {todo.complexity}</p>
      <div className="tags">
        {todo.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
