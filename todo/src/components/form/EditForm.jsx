import { useState } from "react";
import LevelSelector from "../levelselector/LevelSelector";
import Pageheader from "../pageheader/Pageheader";

export default function EditForm({ todoid, setTodos, setIsEditing, todos }) {
  const currentTodo = todos.find((t) => t.id === todoid);
  const [formData, setFormData] = useState({
    id: todoid,
    taskName: currentTodo.taskName,
    Priority: currentTodo.Priority,
    Complexity: currentTodo.Complexity,
    dueDate: currentTodo.dueDate,
    time: currentTodo.time,
    tags: currentTodo.tags,
    subtasks: currentTodo.subtasks,
  });

  function editTodo(e, formData) {
    e.preventDefault();

    setTodos((prevTodos) => {
      return prevTodos.map((t) => {
        if (t.id === todoid) {
          return { ...t, ...formData };
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
    <form action="" onSubmit={(e) => editTodo(e, formData)}>
      <Pageheader title={"Edit Task"} />
      <div>
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
            type="date"
            onChange={handleChange}
            value={formData.dueDate}
          />
        </div>
        <div>
          <label htmlFor="time">Select Time</label>
          <input
            id="time"
            type="time"
            name="time"
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
          value={formData.tags}
        />
      </div>
      <button>Save Task</button>
    </form>
  );
}
