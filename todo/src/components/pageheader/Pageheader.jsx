import Back from "../icons/Back";
import "../pageheader/Pageheader.css";
import { useNavigate } from "react-router-dom";
export default function Pageheader({ title }) {
  const navigate = useNavigate();
  return (
    <header className="Pageheader">
      {/* <span onClick={backToMain}>⬅️</span> */}
      <Back backToMain={navigate} />
      <h1>{title}</h1>
      <span>✏️</span>
    </header>
  );
}
