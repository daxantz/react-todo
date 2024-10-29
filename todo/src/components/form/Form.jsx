import LevelSelector from "../levelselector/LevelSelector";
import Pageheader from "../pageheader/Pageheader";

export default function Form({ task }) {
  return (
    <form action="">
      <Pageheader title={task ? "Edit Task" : "Add New Task"} />
      <div>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" />
      </div>
      <div className="levelSelectors">
        <LevelSelector text={"Priority"} />
        <LevelSelector text={"Complexity"} />
      </div>
      <div className="dateTime">
        <div>
          <label htmlFor="date">Select Due Date</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="date">Select Time</label>
          <input type="time" />
        </div>
      </div>
      <div className="subtaskChecklist">
        <p>Add Checklist for subtask</p>
        <div className="list"></div>
      </div>
      <div className="tags">
        <label htmlFor="">Add Tags</label>
        <input type="text" placeholder="Tag1, Tag2, Tag3" />
      </div>
      <button>Save Task</button>
    </form>
  );
}
