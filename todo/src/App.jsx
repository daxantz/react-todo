import useLocalStorage from "./hooks/useLocalStorage";
import MainPage from "./pages/MainPage";

import { useEffect, useState } from "react";
function App() {
  const { setItem, getItem } = useLocalStorage("todos");
  const [todos, setTodos] = useState(getItem() || []);
  useEffect(() => {
    setItem(todos);
  }, [todos]);
  return (
    <>
      <MainPage todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
