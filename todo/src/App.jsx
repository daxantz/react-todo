import MainPage from "./pages/MainPage";
import Wrapper from "./components/wrapper/Wrapper";
import NotFoundPage from "./components/router/NotFoundPage.jsx";
import Form from "./components/form/Form.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import EditForm from "./components/form/EditForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { TodoContext } from "../../utils.js";
import "./styles.css";
function App() {
  const [value, setValue] = useLocalStorage("todos", []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/newtodo",
      element: <Form />,
    },
    {
      path: "/todos/:todoid",
      element: <TaskDetails />,
    },
    {
      path: "/todos/edit/:todoid",
      element: <EditForm />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <Wrapper>
        <TodoContext.Provider value={{ value, setValue }}>
          <RouterProvider router={router} />
        </TodoContext.Provider>
      </Wrapper>
    </>
  );
}

export default App;
