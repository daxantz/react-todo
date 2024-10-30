import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import CreateTask from "./pages/CreateTask";
import Form from "./components/form/Form";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <MainPage todos={todos} />
      {/* <TaskDetails /> */}
      <CreateTask>
        <Form setTodos={setTodos} />
      </CreateTask>
    </>
  );
}

export default App;
