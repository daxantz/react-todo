import Pageheader from "../components/pageheader/Pageheader";
import Todo from "../components/todo/Todo";
import SubtaskItem from "../components/subtasks/SubtaskItem";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Delete from "../components/icons/Delete";
import Refresh from "../components/icons/Refresh";
import { TodoContext } from "../../../utils";
export default function TaskDetails() {
  const navigate = useNavigate();
  const { todoid } = useParams();
  const { value, setValue } = useContext(TodoContext);
  let currentTodo = value.find((todo) => todo.id === Number(todoid));
  console.log(currentTodo);
  function deleteTodo(id) {
    setValue((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
    navigate(-1);
  }

  return (
    <>
      <Pageheader title={"Task Details"} backToMain={navigate} />
      {currentTodo && <Todo todoId={currentTodo.id} />}

      <div className="subtasks">
        <h2>Checklist for subtasks</h2>
        {currentTodo?.subtasks.map((task) => (
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
        onClick={() => deleteTodo(currentTodo.id)}
      >
        <Delete /> Delete Task
      </button>
    </>
  );
}
