/* eslint-disable react/prop-types */

import { useState } from "react";
import "../dropdown/Dropdown.css";
export default function Dropdown({ title, children }) {
  const [isShowing, setIsShowing] = useState(false);
  function handleClick() {
    setIsShowing((previous) => !previous);
  }
  return (
    <div className="Dropdown">
      <div>
        <button onClick={handleClick}>{title}</button>
      </div>
      {isShowing && <fieldset className="menu">{children}</fieldset>}
    </div>
  );
}
