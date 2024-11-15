import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../utils";

export default function useSearchTodos() {
  const { value } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const [searchedTodos, setSearchedTodos] = useState([]);

  useEffect(() => {
    setSearchedTodos(value.filter((todo) => todo.taskName === search));
  }, [search, value, setSearchedTodos]);

  return { search, setSearch, searchedTodos };
}
