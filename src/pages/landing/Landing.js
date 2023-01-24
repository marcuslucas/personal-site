import classes from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import React from "react";

const Landing = () => {
  const ref = useRef();

  const mouseOver = (event) => {
    const id = event.target.id;
    if (event.target.id === "0") {
      ref.current.style.backgroundPosition = "0% 0%";
    } else {
      ref.current.style.backgroundPosition = `0% ${25 * id}%`;
    }
  };

  return (
    <div className={classes.menu}>
      <div className={classes.menuItems}>
        <div id="0" onMouseOver={mouseOver} className={`${classes.mainName}`}>
          <Link className={`${classes.mainName}`}>Marcus Lucas</Link>
        </div>
        <Link
          to={"work"}
          id="1"
          className={classes.menuItem}
          onMouseOver={mouseOver}
        >
          Work
        </Link>
        <Link
          to={"about"}
          id="2"
          className={classes.menuItem}
          onMouseOver={mouseOver}
          //   ref="hov"
        >
          About
        </Link>
        <Link
          to={"contact"}
          id="3"
          className={classes.menuItem}
          onMouseOver={mouseOver}
          //   ref="hov"
        >
          Contact
        </Link>
      </div>
      <div id={classes.menuBackgroundPattern} ref={ref}></div>
      <div className={classes.menuBackgroundImage}></div>
    </div>
  );
};

export default Landing;
