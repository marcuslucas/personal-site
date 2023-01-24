import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal} onClick={props.onClick}>
      <div className={classes.overlay}>
        <div className={classes.modal_content}>
          <h2>Email Sent</h2>
          <p>
            Thank you for messaging me. I'll get back to you as soon as possible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
