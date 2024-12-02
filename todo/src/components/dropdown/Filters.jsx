import { useContext, useState } from "react";
import Dropdown from "./Dropdown";
import MenuItem from "./MenuItem";
import { TodoContext } from "../../contexts/todoContext";
const sortOptions = [
  { name: "Default", value: "default" },
  { name: "Ascending Date", value: "dueDate" },
  { name: "Descending Date", value: "dueDate" },
  { name: "Ascending Complexity", value: "Complexity" },
  { name: "Descending Complexity", value: "Complexity" },
  { name: "Ascending Priority", value: "Priority" },
  { name: "Descending Priority", value: "Priority" },
];

export default function Filters() {
  const { sortTodos, filters, onFilterChange } = useContext(TodoContext);
  const [activeTags, setActiveTags] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setActiveTags((prev) =>
      checked ? [...prev, value] : prev.filter((tag) => tag !== value)
    );
    onFilterChange(
      checked
        ? [...activeTags, value]
        : activeTags.filter((tag) => tag !== value)
    );
  };

  return (
    <div className="filters">
      <Dropdown title={"Sort"}>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.name}
            option={option}
            type={"radio"}
            handleChange={(event) =>
              sortTodos(event.target.id.split(" ")[0], event.target.value)
            }
          />
        ))}
      </Dropdown>
      <Dropdown title={"Filter"}>
        {filters &&
          filters.map((option) => (
            // <MenuItem key={option.name} option={option} type={"checkbox"} />
            <div className="MenuItem" key={option}>
              <label htmlFor={option}>{option}</label>
              <input
                type="checkbox"
                name={"item"}
                id={option}
                value={option}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
      </Dropdown>
    </div>
  );
}
