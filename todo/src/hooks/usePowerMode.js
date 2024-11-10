import { useState } from "react";

export default function usePowerMode(todos) {
  const [urgentTodo, setUrgentTodo] = useState();

  function setPowerModeTodo() {
    todos.forEach((todo, index) => {
      if (index < todos.length - 1) {
        const nextTodo = todos[index + 1];

        if (todo.urgency < nextTodo.urgency) {
          console.log(nextTodo);

          setUrgentTodo(nextTodo); // Update state to the nextTodo with higher urgency
        }
      }
    });
  }

  function clearUrgentTodo() {
    setUrgentTodo(null);
  }

  return [urgentTodo, setPowerModeTodo, clearUrgentTodo];
}
