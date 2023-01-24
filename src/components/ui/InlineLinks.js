import { NavLink } from "react-router-dom";
import classes from "./InlineLinks.module.css";

const InlineLinks = () => {
  return (
    <div className={classes.nav_items_container}>
      <ul className={classes.nav_items}>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? `${classes.nav_item_active}` : `${classes.nav_item}`
            }
          >
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.nav_item_active}` : `${classes.nav_item}`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${classes.nav_item_active}` : `${classes.nav_item}`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InlineLinks;
