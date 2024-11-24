import { useContext, useState } from "react";
import LevelSelector from "../levelselector/LevelSelector";
import Pageheader from "../pageheader/Pageheader";
import "../form/Form.css";
import { TodoContext } from "../../contexts/todoContext";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const { createTodo } = useContext(TodoContext);
  const [subtasks, setSubtasks] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    taskName: "",
    Priority: "",
    Complexity: "",
    dueDate: "",
    time: "",

    tags: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    createTodo(formData, subtasks);

    setFormData({
      taskName: "",
      Priority: null,
      Complexity: null,
      dueDate: "",
      time: "",

      tags: "",
    });
    navigate(-1);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function setLevel(name, id) {
    setFormData((prevData) => ({ ...prevData, [name]: Number(id) }));
  }

  return (
    <form className="Form" action="" onSubmit={(e) => handleSubmit(e)}>
      <Pageheader title={"Add New Task"} backToMain={navigate} />
      <div className="name-input">
        <label htmlFor="taskName">Task Name</label>
        <input
          name="taskName"
          type="text"
          id="taskName"
          value={formData.taskName}
          onChange={handleChange}
        />
      </div>
      <div className="levelSelectors">
        <LevelSelector name={"Priority"} setLevel={setLevel} />
        <LevelSelector name={"Complexity"} setLevel={setLevel} />
      </div>
      <div className="dateTime">
        <div>
          <label htmlFor="dueDate">Select Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="text"
            onChange={handleChange}
            value={formData.dueDate}
            placeholder="dd.mm.yyyy"
          />
        </div>
        <div>
          <label htmlFor="time">Select Time</label>
          <input
            id="time"
            type="text"
            name="time"
            placeholder="00:00"
            onChange={handleChange}
            value={formData.time}
          />
        </div>
      </div>
      <CheckList
        subtasks={subtasks}
        setSubtasks={setSubtasks}
        setFormData={setFormData}
      />
      <div className="tags">
        <label htmlFor="tags">Add Tags</label>
        <input
          name="tags"
          id="tags"
          type="text"
          placeholder="Tag1, Tag2, Tag3"
          onChange={handleChange}
          value={formData.tags}
        />
      </div>
      <button>Save Task</button>
    </form>
  );
}

function CheckList({ subtasks, setSubtasks }) {
  const [taskText, setTaskText] = useState("");
  function addSubtask(e) {
    e.preventDefault();
    setSubtasks((subtasks) => {
      console.log(subtasks);
      return [
        ...subtasks,
        { id: Date.now(), text: taskText, isCompleted: false },
      ];
    });
    setTaskText("");
  }
  function removeSubtask(e, id) {
    e.preventDefault();
    setSubtasks((tasks) => {
      console.log(tasks);
      return tasks.filter((task) => task.id !== id);
    });
  }

  return (
    <div className="subtaskChecklist">
      <p>Add Checklist for subtask</p>

      <div className="list">
        <ul>
          {subtasks.map((task) => (
            <div key={task.id} className="input-container">
              <input type="text" name="" id="" readOnly value={task.text} />
              <button onClick={(e) => removeSubtask(e, task.id)}>X</button>
            </div>
          ))}
        </ul>
      </div>
      <div className="input-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add New Subtask..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addSubtask}>+</button>
      </div>
    </div>
  );
}
