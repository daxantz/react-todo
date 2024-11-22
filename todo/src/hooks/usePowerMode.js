import { useState } from "react";

export default function usePowerMode(todos) {
  const [urgentTodo, setUrgentTodo] = useState();

  function setPowerModeTodo() {
    let high = todos[0];
    todos.forEach((todo, index) => {
      if (index < todos.length - 1) {
        let nextTodo = todos[index + 1];

        if (todo.urgency < nextTodo.urgency) {
          console.log(nextTodo);
          high = todo;
        }
      }
    });
    setUrgentTodo(high); // Update state to the nextTodo with higher urgency
  }

  function clearUrgentTodo() {
    setUrgentTodo(null);
  }

  return [urgentTodo, setPowerModeTodo, clearUrgentTodo];
}
