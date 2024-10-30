import { useState } from "react";
import LevelSelector from "../levelselector/LevelSelector";
import Pageheader from "../pageheader/Pageheader";

export default function Form({ task, setTodos, backToMain }) {
  const [formData, setFormData] = useState({
    taskName: "",
    Priority: "",
    Complexity: "",
    dueDate: "",
    time: "",
    tags: "",
  });

  function createTodo(e) {
    e.preventDefault();

    console.log(formData);
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Date.now(),
          name: formData.taskName,
          priority: formData.Priority,
          complexity: formData.Complexity,
          dueDate: formData.dueDate,
          time: formData.time,
          tags: formData.tags.split(","),
          subtasks: [
            // { text: "st1", id: 1 },
            // { text: "st2", id: 2 },
          ],
        },
      ];
    });
    setFormData({
      taskName: "",
      Priority: "",
      Complexity: "",
      dueDate: "",
      time: "",
      tags: "",
    });
    backToMain();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function setLevel(name, id) {
    setFormData((prevData) => ({ ...prevData, [name]: `${id}/10` }));
  }

  return (
    <form action="" onSubmit={(e) => createTodo(e)}>
      <Pageheader
        title={task ? "Edit Task" : "Add New Task"}
        backToMain={backToMain}
      />
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
