import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const TodoContext = createContext(undefined);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [searchTodos, setSearchTodos] = useState([]);
  function createTodo(formData, subtasks) {
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
        subtasks: subtasks,
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

  function completeSubtask(currentTodoId, subtaskId) {
    setTodos((todos) => {
      return todos.map((t) =>
        t.id === currentTodoId
          ? {
              ...t,
              subtasks: t.subtasks.map((task) =>
                task.id === subtaskId
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task
              ),
            }
          : t
      );
    });
  }

  function repeatTask(currentTodoId) {
    setTodos((todos) => {
      return todos.map((t) =>
        t.id === currentTodoId
          ? {
              ...t,
              subtasks: t.subtasks.map((task) => {
                return { ...task, isCompleted: false };
              }),
            }
          : t
      );
    });
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
        completeSubtask,
        repeatTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
