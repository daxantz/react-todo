import { useState } from "react";
import LevelSelector from "../levelselector/LevelSelector";
import Pageheader from "../pageheader/Pageheader";
import "../form/Form.css";
export default function EditForm({ todoid, setTodos, setIsEditing, todos }) {
  const currentTodo = todos.find((t) => t.id === todoid);
  const [formData, setFormData] = useState({
    id: todoid,
    taskName: currentTodo.taskName,
    Priority: currentTodo.Priority,
    Complexity: currentTodo.Complexity,
    dueDate: currentTodo.dueDate,
    time: currentTodo.time,
    tags: currentTodo.tags.toString(),
    subtasks: currentTodo.subtasks,
  });

  function editTodo(e, formData) {
    e.preventDefault();
    const updateFormData = {
      ...formData,
      tags: formData.tags.split(","),
      urgency: formData.Complexity + formData.Priority,
      isCompleted: null,
    };
    console.log("updated form data", updateFormData);
    setTodos((prevTodos) => {
      return prevTodos.map((t) => {
        if (t.id === todoid) {
          return { ...t, ...updateFormData };
        } else {
          return t;
        }
      });
    });
    setIsEditing((previous) => !previous);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function setLevel(name, id) {
    setFormData((prevData) => ({ ...prevData, [name]: Number(id) }));
  }

  return (
    <form className="Form" action="" onSubmit={(e) => editTodo(e, formData)}>
      <Pageheader title={"Edit Task"} />
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
      <div className="subtaskChecklist">
        <p>Add Checklist for subtask</p>
        <div className="list"></div>
      </div>
      <div className="tags">
        <label htmlFor="tags">Add Tags</label>
        <input
          name="tags"
          id="tags"
          type="text"
          placeholder="Tag1, Tag2, Tag3"
          onChange={handleChange}
          value={formData.tags.toString()}
        />
      </div>
      <button>Save Task</button>
    </form>
  );
}
