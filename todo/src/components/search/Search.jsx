import { useContext, useEffect, useState } from "react";
import "../search/Search.css";
import { TodoContext } from "../../contexts/todoContext";

export default function Search() {
  const [query, setQuery] = useState("");
  const { findTodos } = useContext(TodoContext);
  useEffect(() => {
    const timeout = setTimeout(() => findTodos(query), 300);
    return () => clearTimeout(timeout);
  }, [query, findTodos]);
  return (
    <form action="" className="Search">
      <div className="input-wrapper">
        <span className="icon">🔍</span>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </div>
    </form>
  );
}
