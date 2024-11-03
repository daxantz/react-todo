import { useEffect } from "react";
import "../search/Search.css";
export default function Search({ search, setSearch, todos, setSearchedTodos }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setSearchedTodos(todos.filter((todo) => todo.taskName === search));
  }, [search, todos, setSearchedTodos]);

  return (
    <form action="" className="Search">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        value={search}
      />
    </form>
  );
}
