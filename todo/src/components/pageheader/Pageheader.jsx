import "../pageheader/Pageheader.css";

export default function Pageheader({ title, backToMain }) {
  return (
    <header className="Pageheader">
      <span onClick={backToMain}>⬅️</span>
      <h1>{title}</h1>
      <span>✏️</span>
    </header>
  );
}
