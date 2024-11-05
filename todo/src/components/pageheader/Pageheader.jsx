import Back from "../icons/Back";
import "../pageheader/Pageheader.css";

export default function Pageheader({ title, backToMain }) {
  return (
    <header className="Pageheader">
      {/* <span onClick={backToMain}>⬅️</span> */}
      <Back backToMain={backToMain} />
      <h1>{title}</h1>
      <span>✏️</span>
    </header>
  );
}
