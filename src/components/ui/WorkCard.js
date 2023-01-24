import classes from "./WorkCard.module.css";

// const DUMMY_CARD = <div className={classes.project_cards}>
// <div className={classes.project_card}>
//   <h2 className={classes.project_name}>Project Name</h2>
//   <p className={classes.subtitle_bold}>
//     A web application that does cool shit
//   </p>
//   <p className={classes.subtitle_date}>December 2022</p>
//   <p className={classes.subtitle}>
//     Project Description. This project served this function and helped me
//     learn these Firebase and Mongo DB core concepts. Other things new I
//     used
//   </p>
// </div>

const WorkCard = () => {
  return (
    <div className={classes.project_wrapper}>
      <div className={classes.project_display}></div>
      <div className={classes.project_cards}>
        <div className={classes.project_card}>
          <h2 className={classes.project_name}>
            CSS - The Complete Guide 2023
          </h2>
          <p className={classes.subtitle_bold}>
            Maximilian Schwarzmüller's CSS course
          </p>
          <p className={classes.subtitle_date}>December 2022</p>
          <p className={classes.subtitle}>
            After completing Maximilian's "React - The Complete Guide" course, I
            began Max's CSS course also found on Udemy. I decided to study more
            CSS in order to brush up my web development skills. After finishing
            the course I felt a lot more comfortable designing web apps.
          </p>
        </div>
      </div>
      <div className={classes.project_cards}>
        <div className={classes.project_card}>
          <h2 className={classes.project_name}>React - The Complete Guide</h2>
          <p className={classes.subtitle_bold}>
            Maximilian Schwarzmüller's React deep dive course
          </p>
          <p className={classes.subtitle_date}>November 2022</p>
          <p className={classes.subtitle}>
            In November 2022, I completed the "React - The Complete Guide"
            course on Udemy. Throughout the course I studied Reactjs, Hooks,
            Redux, React routing, and much more. Max's clarity and teaching
            style made learning React a fun and interactive and I walked away
            with a deep unnderstanding of React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
