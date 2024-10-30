import Search from "../components/search/Search";
import Dropdown from "../components/dropdown/Dropdown";
import MenuItem from "../components/dropdown/MenuItem";
import Todo from "../components/todo/Todo";
import TaskDetails from "./TaskDetails";
import { useState } from "react";
export default function MainPage({ todos, createTodo }) {
  const [currentTodo, setCurrentTodo] = useState(null);

  function handleClick(id) {
    const currentTodo = todos.find((todo) => todo.id === id);
    setCurrentTodo(currentTodo);
    console.log("the current todo is : ", currentTodo);
  }
  const sortOptions = [
    { name: "Default" },
    { name: "Ascending Date" },
    { name: "Decending Date" },
    { name: "Ascending Complexity" },
    { name: "Decending Complexity" },
    { name: "Ascending Priority" },
    { name: "Decending Priority" },
  ];

  const filterOptions = [{ name: "tag1" }, { name: "tag2" }];
  return (
    <>
      {currentTodo ? (
        <TaskDetails todo={currentTodo} />
      ) : (
        <>
          <Search />
          <div className="filters">
            <Dropdown title={"Sort"}>
              {sortOptions.map((option) => (
                <MenuItem key={option.name} option={option} type={"radio"} />
              ))}
            </Dropdown>
            <Dropdown title={"Filter"}>
              {filterOptions.map((option) => (
                <MenuItem key={option.name} option={option} type={"checkbox"} />
              ))}
            </Dropdown>
          </div>
          <div className="todos">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleClick={handleClick} />
            ))}
          </div>
          <button onClick={createTodo}>+ Add New Task</button>
        </>
      )}
    </>
  );
}
