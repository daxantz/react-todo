import "../progressbar/Progress.css";

function Progress({ progress }) {
  return (
    <div className="Progress">
      <div>
        <span>Task Complete</span>
        <span>{progress}%</span>
      </div>
      <progress value={progress} max={100}></progress>
    </div>
  );
}

export default Progress;
