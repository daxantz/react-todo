import { Link } from "react-router-dom";
import Search from "../components/search/Search";

import Todo from "../components/todo/Todo";

import { useContext, useState } from "react";

import { setSortArray, TodoContext } from "../../../utils";
import usePowerMode from "../hooks/usePowerMode";
import useSearchTodos from "../hooks/useSearchTodos";
import Filters from "../components/dropdown/Filters";

export default function MainPage() {
  const { value } = useContext(TodoContext);
  const { search, setSearch, searchedTodos } = useSearchTodos();
  const [selectedValue, setSelectedValue] = useState();
  const [tempTodos, setTempTodos] = useState([...value]);

  const [urgentTodo, setPowerMode, clearUrgentTodo] = usePowerMode(value);
  function handleChange(event) {
    setSelectedValue(event.target.value);

    setTempTodos(() => {
      return setSortArray(
        event.target.value,
        event.target.id.split(" ")[0],
        value
      );
    });
    console.log("temp todos", tempTodos);
  }
  function getTodosToDisplay() {
    //if user searchs for a todo or uses the dropdown to filter the appropriate array will be returned , original todos array returned if no use action
    const hasSearchedTodos = searchedTodos.length > 0;
    const hasSelectedValue = selectedValue !== undefined;

    if (hasSearchedTodos) return searchedTodos;
    if (hasSelectedValue) return tempTodos;

    return value;
  }

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Filters handleChange={handleChange} />

      {urgentTodo ? (
        <Todo todoId={urgentTodo.id} />
      ) : (
        <div className="todos">
          {getTodosToDisplay().map((todo) => (
            <Todo key={todo.id} todoId={todo.id} />
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
