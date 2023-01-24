import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card_wrapper}>
      <div className={classes.text_box}>
        <p className={classes.about_title}>ABOUT ME</p>
        <p className={classes.about_sub}>Greetings! I'm Marcus. </p>
        <p>
          I'm a self-educated programmer who specializes in React based web
          development and python scripting.
        </p>
        <p className={classes.about_sub}>
          Let's get in contact! Feel free to peep my{" "}
          <a
            className={classes.about_link}
            href="https://www.linkedin.com/in/marcus-lucas/"
          >
            LinkedIn
          </a>{" "}
          or shoot me an{" "}
          <a
            className={classes.about_link}
            href="mailto:marcuswlucas@gmail.com"
          >
            Email
          </a>
          . Looking forward to being in communication.
        </p>
        <p className={classes.about_title}>Getting a little more personal</p>
        <p className={classes.about_sub}>
          I love to code, but there is more to me that meets the eye. Aside from
          web development I enjoy making espresso drinks, playing/improvising on
          the piano, and spending time with friends and family.{" "}
        </p>
      </div>
      <div className={classes.img_box}>
        <img
          className={classes.circ_img}
          src={require("./../../../src/assets/headshot.jpeg")}
          alt="Marcus Lucas"
        ></img>
      </div>
    </div>
  );
};

// src/assets/headshot.jpeg

export default Card;
