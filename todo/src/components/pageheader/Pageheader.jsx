import "../pageheader/Pageheader.css";

export default function Pageheader({ title }) {
  return (
    <header className="Pageheader">
      <span>⬅️</span>
      <h1>{title}</h1>
      <span>✏️</span>
    </header>
  );
}
