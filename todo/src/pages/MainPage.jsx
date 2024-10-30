import Search from "../components/search/Search";
import Dropdown from "../components/dropdown/Dropdown";
import MenuItem from "../components/dropdown/MenuItem";
import Todo from "../components/todo/Todo";
export default function MainPage({ todos }) {
  const sortOptions = [
    { name: "Default" },
    { name: "Ascending Date" },
    { name: "Decending Date" },
    { name: "Ascending Complexity" },
    { name: "Decending Complexity" },
    { name: "Ascending Priority" },
    { name: "Decending Priority" },
  ];

  const filterOptions = [{ name: "tag1" }, { name: "tag2" }];
  return (
    <>
      <Search />
      <div className="filters">
        <Dropdown title={"Sort"}>
          {sortOptions.map((option) => (
            <MenuItem key={option.name} option={option} type={"radio"} />
          ))}
        </Dropdown>
        <Dropdown title={"Filter"}>
          {filterOptions.map((option) => (
            <MenuItem key={option.name} option={option} type={"checkbox"} />
          ))}
        </Dropdown>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <button>+ Add New Task</button>
    </>
  );
}
