export default function SubtaskItem({ subtask }) {
  return (
    <div>
      <span>{subtask.text}</span>
      <button>✅</button>
    </div>
  );
}
