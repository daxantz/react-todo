export default function Check({ markComplete, isCompleted }) {
  return (
    <svg
      className={`Check ${isCompleted && "completed"}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={markComplete}
    >
      <circle
        cx="16"
        cy="16"
        r="16"
        fill={!isCompleted ? "#0D99FF" : "green"}
        fillOpacity="0.1"
      />
      <path
        d="M22 11.5L13.75 19.75L10 16"
        stroke="#717171"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
