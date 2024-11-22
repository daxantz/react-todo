import { useContext, useEffect, useState } from "react";

import { TodoContext } from "../contexts/todoContext";

export default function useSearchTodos() {
  const { todos } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const [searchedTodos, setSearchedTodos] = useState([]);

  useEffect(() => {
    setSearchedTodos(todos.filter((todo) => todo.taskName === search));
  }, [search, todos, setSearchedTodos]);

  return { search, setSearch, searchedTodos };
}
