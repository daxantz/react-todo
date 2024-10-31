import Pageheader from "../components/pageheader/Pageheader";
import Todo from "../components/todo/Todo";
import SubtaskItem from "../components/subtasks/SubtaskItem";
export default function TaskDetails({
  todo,
  handleToggle,
  setTodos,
  resetTodo,
}) {
  // const todo = {
  //   title: "First todo",
  //   dueDate: "2/24/2024",
  //   priority: "8/10",
  //   complexity: "10/10",
  //   subtasks: [
  //     { text: "1. Research the company and its culture", id: 1 },
  //     { text: "1. Research the company and its culture", id: 3 },
  //     { text: "1. Research the company and its culture", id: 4 },
  //     { text: "1. Research the company and its culture", id: 2 },
  //   ],
  // };

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
    resetTodo();
  }

  return (
    <>
      <Pageheader title={"Task Details"} backToMain={handleToggle} />
      <Todo todo={todo} />
      <div className="subtasks">
        <h2>Checklist for subtasks</h2>
        {todo?.subtasks.map((task) => (
          <SubtaskItem key={task.id} subtask={task} />
        ))}
      </div>
      <button>Repeat Task</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete Task</button>
    </>
  );
}
