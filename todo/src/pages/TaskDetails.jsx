import Pageheader from "../components/pageheader/Pageheader";
import Todo from "../components/todo/Todo";
import SubtaskItem from "../components/subtasks/SubtaskItem";
import { useState } from "react";

import EditForm from "../components/form/EditForm";
import Delete from "../components/icons/Delete";
import Refresh from "../components/icons/Refresh";
export default function TaskDetails({
  todo,
  handleToggle,
  setTodos,
  resetTodo,
  todos,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
    resetTodo();
  }

  function handleSetEditing() {
    setIsEditing((previous) => !previous);
    console.log("editing", todo);
  }

  return (
    <>
      {isEditing ? (
        <EditForm
          todoid={todo.id}
          setTodos={setTodos}
          setIsEditing={setIsEditing}
          todos={todos}
        />
      ) : (
        <>
          <Pageheader title={"Task Details"} backToMain={handleToggle} />
          <Todo
            todo={todo}
            handleEditTodo={handleSetEditing}
            todos={todos}
            todoId={todo.id}
          />

          <div className="subtasks">
            <h2>Checklist for subtasks</h2>
            {todo?.subtasks.map((task) => (
              <SubtaskItem key={task.id} subtask={task} />
            ))}
          </div>
          <button
            className="btn"
            style={{
              padding: "18px 137px",
              backgroundColor: "#0D99FF",
              color: "white",
              borderRadius: "90px",
              border: "none",
            }}
          >
            <Refresh />
            <span style={{ marginLeft: "10px" }}>Repeat Task</span>
          </button>
          <button
            className="btn"
            style={{
              padding: "18px 137px",
              backgroundColor: "#FFE0DE",

              borderRadius: "90px",
              border: "none",
            }}
            onClick={() => deleteTodo(todo.id)}
          >
            <Delete /> Delete Task
          </button>
        </>
      )}
    </>
  );
}
