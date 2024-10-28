import Search from "./components/search/Search";
import Dropdown from "./components/dropdown/Dropdown";
import MenuItem from "./components/dropdown/MenuItem";
function App() {
  const options = [
    { name: "Default" },
    { name: "Ascending Date" },
    { name: "Decending Date" },
    { name: "Ascending Complexity" },
    { name: "Decending Complexity" },
    { name: "Ascending Priority" },
    { name: "Decending Priority" },
  ];
  return (
    <>
      <Search />
      <Dropdown title="filter">
        {options.map((option) => (
          <MenuItem key={option.name} option={option} />
        ))}
      </Dropdown>
    </>
  );
}

export default App;
