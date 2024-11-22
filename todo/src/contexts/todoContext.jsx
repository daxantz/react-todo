import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const TodoContext = createContext(undefined);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [searchTodos, setSearchTodos] = useState([]);
  function createTodo(formData) {
    const newTodos = [
      ...todos,
      {
        id: Date.now(),
        taskName: formData.taskName,
        Priority: formData.Priority,
        Complexity: formData.Complexity,
        dueDate: formData.dueDate,
        time: formData.time,
        tags: formData.tags.split(","),
        subtasks: [
          // { text: "st1", id: 1 },
          // { text: "st2", id: 2 },
        ],
        urgency: formData.Complexity + formData.Priority,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }

  function completeTodo(id) {
    setTodos((todos) =>
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  }

  function filterTodos(direction, property) {
    if (direction === "Ascending") {
      setTodos((todos) => {
        return todos.toSorted((a, b) => a[property] - b[property]);
      });
    } else if (direction === "Descending") {
      setTodos((todos) => {
        return todos.toSorted((a, b) => b[property] - a[property]);
      });
    } else {
      return todos;
    }
  }

  function findTodos(query) {
    if (query.trim() === "") {
      setSearchTodos(todos); // Show all todos when the query is empty
    } else {
      setSearchTodos(
        todos.filter((todo) =>
          todo.taskName.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        deleteTodo,
        completeTodo,
        filterTodos,
        findTodos,
        searchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
