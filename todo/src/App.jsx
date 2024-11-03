import useLocalStorage from "./hooks/useLocalStorage";
import MainPage from "./pages/MainPage";
import Wrapper from "./components/wrapper/Wrapper";
import { useEffect, useState } from "react";
function App() {
  const { setItem, getItem } = useLocalStorage("todos");
  const [todos, setTodos] = useState(getItem() || []);
  useEffect(() => {
    setItem(todos);
  }, [todos]);
  return (
    <>
      <Wrapper>
        <MainPage todos={todos} setTodos={setTodos} />
      </Wrapper>
    </>
  );
}

export default App;
