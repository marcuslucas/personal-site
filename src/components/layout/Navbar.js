import { NavLink } from "react-router-dom";
import Hamburger from "../ui/Hamburger";
import InlineLinks from "../ui/InlineLinks";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileView(false);
        // console.log("not mobile");
      } else if (window.innerWidth < 900) {
        setMobileView(true);
        // console.log("this is mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.nav_container}>
      <div className={classes.nav_logo}>
        <NavLink to="/" className={classes.nav_logo_name}>
          Marcus Lucas
        </NavLink>
      </div>
      <div className={classes.nav_type}>
        {mobileView ? <Hamburger /> : <InlineLinks />}
      </div>
    </div>
  );
};

export default Navbar;
