import { useContext } from "react";
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

const filterOptions = [{ name: "tag1" }, { name: "tag2" }];
export default function Filters() {
  const { filterTodos } = useContext(TodoContext);
  return (
    <div className="filters">
      <Dropdown title={"Sort"}>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.name}
            option={option}
            type={"radio"}
            handleChange={(event) =>
              filterTodos(event.target.id.split(" ")[0], event.target.value)
            }
          />
        ))}
      </Dropdown>
      <Dropdown
        title={"Filter"}
        handleChange={(event) =>
          filterTodos(event.target.id.split(" ")[0], event.target.value)
        }
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.name} option={option} type={"checkbox"} />
        ))}
      </Dropdown>
    </div>
  );
}
