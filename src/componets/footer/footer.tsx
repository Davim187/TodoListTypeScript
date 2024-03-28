import React from "react";
import Style from "./footer.module.css"


const Footer = () => {


  
  return (
    <div>
      <footer className={Style.footer}>
        <p>
          <span className={Style.span}>React + TS TODO </span> @2024
        </p>
      </footer>
    </div>
  );
};
 export default Footer