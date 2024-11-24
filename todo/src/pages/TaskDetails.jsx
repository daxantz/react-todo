import Pageheader from "../components/pageheader/Pageheader";
import Todo from "../components/todo/Todo";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Delete from "../components/icons/Delete";
import Refresh from "../components/icons/Refresh";
import { TodoContext } from "../contexts/todoContext";
import "../pages/TaskDetails.css";
import Check from "../components/icons/Check";
export default function TaskDetails() {
  const navigate = useNavigate();
  const { todoid } = useParams();
  const { todos, deleteTodo } = useContext(TodoContext);
  let currentTodo = todos.find((todo) => todo.id === Number(todoid));
  console.log(currentTodo);
  function handleDelete(id) {
    deleteTodo(id);
    navigate(-1);
  }

  return (
    <>
      <Pageheader title={"Task Details"} backToMain={navigate} />
      {currentTodo && <Todo todoId={currentTodo.id} />}

      <div className="subtaskChecklist">
        <h2>Checklist for subtasks</h2>
        {currentTodo.subtasks.map((task) => (
          <div key={task.id} className="input-container">
            <input type="text" name="" id="" readOnly value={task.text} />

            <Check isCompleted={task.isCompleted} />
          </div>
        ))}
      </div>

      <button className="btn">
        <Refresh />
        <span>Repeat Task</span>
      </button>
      <button
        className="delete-btn btn"
        onClick={() => handleDelete(currentTodo.id)}
      >
        <Delete /> Delete Task
      </button>
    </>
  );
}
