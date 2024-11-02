const sortOptions = [
  { name: "Default", value: "default" },
  { name: "Ascending Date", value: "dueDate" },
  { name: "Descending Date", value: "dueDate" },
  { name: "Ascending Complexity", value: "Complexity" },
  { name: "Descending Complexity", value: "Complexity" },
  { name: "Ascending Priority", value: "Priority" },
  { name: "Descending Priority", value: "Priority" },
];

import Search from "../components/search/Search";
import Dropdown from "../components/dropdown/Dropdown";
import MenuItem from "../components/dropdown/MenuItem";
import Todo from "../components/todo/Todo";
import TaskDetails from "./TaskDetails";
import { useState } from "react";
import CreateTask from "./CreateTask";
import Form from "../components/form/Form";
import { setSortArray } from "../../../utils";
export default function MainPage({ todos, setTodos, setStoredTodos }) {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isCreatingTodo, setIsCreatingTodo] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [tempTodos, setTempTodos] = useState([...todos]);

  function handleChange(event) {
    setSelectedValue(event.target.value);

    setTempTodos(() => {
      return setSortArray(
        event.target.value,
        event.target.id.split(" ")[0],
        todos
      );
    });
    console.log("temp todos", tempTodos);
  }

  function handleToggle() {
    setIsCreatingTodo((previous) => !previous);
  }

  function handleClick(id) {
    const currentTodo = todos.find((todo) => todo.id === id);
    setCurrentTodo(currentTodo);
    console.log("the current todo is : ", currentTodo);
  }

  function resetTodo() {
    setCurrentTodo(null);
  }

  const filterOptions = [{ name: "tag1" }, { name: "tag2" }];
  return (
    <>
      {currentTodo ? (
        <TaskDetails
          todo={currentTodo}
          handleToggle={resetTodo}
          setTodos={setTodos}
          resetTodo={resetTodo}
          todos={todos}
        />
      ) : isCreatingTodo ? (
        <CreateTask>
          <Form
            setTodos={setTodos}
            backToMain={handleToggle}
            setStoredTodos={setStoredTodos}
          />
        </CreateTask>
      ) : (
        <>
          <Search />
          <div className="filters">
            <Dropdown title={"Sort"}>
              {sortOptions.map((option) => (
                <MenuItem
                  key={option.name}
                  option={option}
                  type={"radio"}
                  handleChange={handleChange}
                />
              ))}
            </Dropdown>
            <Dropdown title={"Filter"} handleChange={handleChange}>
              {filterOptions.map((option) => (
                <MenuItem key={option.name} option={option} type={"checkbox"} />
              ))}
            </Dropdown>
          </div>
          <div className="todos">
            {selectedValue
              ? tempTodos.map((todo) => (
                  <Todo key={todo.id} todo={todo} handleClick={handleClick} />
                ))
              : todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} handleClick={handleClick} />
                ))}
          </div>
          <button onClick={handleToggle}>+ Add New Task</button>
        </>
      )}
    </>
  );
}
