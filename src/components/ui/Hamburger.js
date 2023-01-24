import classes from "./Hamburger.module.css";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
  return (
    <nav id="navbar">
      <input type="checkbox" className={classes.toggle1} id="toggle" />
      <label for="toggle" className={classes.hamburger1}>
        <div className={classes.top}></div>
        <div className={classes.middle}></div>
        <div className={classes.bottom}></div>
      </label>
      <nav className={classes.menu1}>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive
              ? `${classes.nav_item_active} ${classes.nav_item}`
              : `${classes.nav_item}`
          }
        >
          WORK
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${classes.nav_item_active} ${classes.nav_item}`
              : `${classes.nav_item}`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${classes.nav_item_active} ${classes.nav_item}`
              : `${classes.nav_item}`
          }
        >
          CONTACT
        </NavLink>
      </nav>
    </nav>
  );
};

export default Hamburger;
