import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={classes.auth}>
      <div className={classes.auth_wrapper}>
        <h1>Authorization required</h1>
        <input
          className={classes.auth_input}
          type="input"
          placeholder="Username"
        ></input>
        <input
          className={classes.auth_input}
          type="input"
          placeholder="Password"
        ></input>
      </div>
    </div>
  );
};

export default Auth;
