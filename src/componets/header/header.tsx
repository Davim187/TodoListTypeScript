import React from "react";
import Style from "./header.module.css"
const Header = () => {
  return (
    <div>
      <header className={Style.header}>
        <h1>React + TS TODO</h1>
      </header>
    </div>
  );
};
 export default Header