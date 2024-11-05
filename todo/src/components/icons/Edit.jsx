export default function Edit({ handleEditTodo }) {
  return (
    <svg
      className="Edit"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleEditTodo}
    >
      <circle cx="16" cy="16" r="16" fill="#0D99FF" fillOpacity="0.1" />
      <path
        d="M17.2744 21.9238H22.0572"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.641 10.7167C17.1938 10.0125 18.087 10.0492 18.792 10.602L19.8345 11.4195C20.5395 11.9722 20.7893 12.8295 20.2365 13.5352L14.0198 21.4665C13.812 21.732 13.4948 21.8887 13.1573 21.8925L10.7595 21.9232L10.2165 19.587C10.14 19.2592 10.2165 18.9142 10.4243 18.648L16.641 10.7167Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4771 12.2021L19.0726 15.0206"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
