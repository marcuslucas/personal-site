import React from "react";
import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Navbar className={classes.layout_nav} />
      <div className={classes.layout_content}>{props.children}</div>
      <Footer className={classes.layout_footer} />
    </div>
  );
};

export default Layout;
