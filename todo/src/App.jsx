import useLocalStorage from "./hooks/useLocalStorage";
import MainPage from "./pages/MainPage";
import Wrapper from "./components/wrapper/Wrapper";

import "../src/styles.css";
function App() {
  const [value, setValue] = useLocalStorage("todos", []);

  return (
    <>
      <Wrapper>
        <MainPage todos={value} setTodos={setValue} />
      </Wrapper>
    </>
  );
}

export default App;
