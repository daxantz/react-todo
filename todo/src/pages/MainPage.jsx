import { Link } from "react-router-dom";
import Search from "../components/search/Search";
import Todo from "../components/todo/Todo";
import { useContext } from "react";
import usePowerMode from "../hooks/usePowerMode";
import Filters from "../components/dropdown/Filters";
import { TodoContext } from "../contexts/todoContext";

export default function MainPage() {
  const { todos, searchTodos } = useContext(TodoContext);

  const [urgentTodo, setPowerMode, clearUrgentTodo] = usePowerMode(todos);

  return (
    <>
      <Search />
      <Filters />

      {urgentTodo ? (
        <Todo todoId={urgentTodo.id} page={"main"} />
      ) : (
        <div className="todos">
          {searchTodos
            ? searchTodos.map((todo) => (
                <Todo key={todo.id} todoId={todo.id} page={"main"} />
              ))
            : todos.map((todo) => (
                <Todo key={todo.id} todoId={todo.id} page={"main"} />
              ))}
        </div>
      )}

      <div className="btn-container">
        <button className="btn">
          <Link to="/newtodo"> + Add New Task</Link>
        </button>
        <button
          onClick={!urgentTodo ? setPowerMode : clearUrgentTodo}
          className="btn"
        >
          {!urgentTodo ? "Power Mode On" : "Power Mode Off"}
        </button>
      </div>
    </>
  );
}
