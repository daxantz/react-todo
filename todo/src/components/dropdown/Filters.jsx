import Dropdown from "./Dropdown";
import MenuItem from "./MenuItem";
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
export default function Filters({ handleChange }) {
  return (
    <div className="filters">
      <Dropdown title={"Sort"}>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.name}
            option={option}
            type={"radio"}
            handleChange={handleChange}
          />
        ))}
      </Dropdown>
      <Dropdown title={"Filter"} handleChange={handleChange}>
        {filterOptions.map((option) => (
          <MenuItem key={option.name} option={option} type={"checkbox"} />
        ))}
      </Dropdown>
    </div>
  );
}
