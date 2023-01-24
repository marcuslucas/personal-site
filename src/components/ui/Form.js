import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import useInput from "../../hooks/use-input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Modal from "./Modal";
import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Form = () => {
  const [modal, setModal] = useState(false);
  const form = useRef();
  (function () {
    emailjs.init("YOUR_PUBLIC_KEY");
  })();

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const toggleModal = () => {
    console.log("click");
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      emailjs
        .sendForm(
          "service_m1y5r0y",
          "template_1tfq43h",
          form.current,
          "IqApi4TC4G9rZEjAV"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("email sent");
          },
          (error) => {
            console.log(error.text);
            console.log("error submission");
          }
        );
    }

    console.log("Submitted");
    console.log(nameValue, emailValue, messageValue);
    resetEmail();
    resetName();
    resetMessage();
  };

  const nameClasses = nameHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const emailClasses = emailHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const messageClasses = messageHasError
    ? `${classes.form_control} ${classes.invalid} ${classes.form_msg}`
    : `${classes.form_control} ${classes.form_msg}`;

  return (
    <>
      <div className={classes.contact_container}>
        <div className={classes.contact_text}>
          <h1>
            Love to hear from you. <br />
            Let's get in touch 👋
          </h1>
          <div className={classes.contact_icons}>
            <a target="__blank" href="https://www.instagram.com/marcuswlucas/">
              <FontAwesomeIcon
                className={classes.contact_icon}
                icon={faInstagram}
              />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/marcus-lucas/"
            >
              <FontAwesomeIcon
                className={classes.contact_icon}
                icon={faLinkedin}
              />
            </a>
            <a target="__blank" href="mailto:marcuslucas5680@gmail.com">
              <FontAwesomeIcon
                className={classes.contact_icon}
                icon={faEnvelope}
              />
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={classes.contact_form}
        >
          <div id="name" className={classes.contact_item}>
            <label className={classes.form_label}>
              Your Name
              <br />
              <input
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                id="name_input"
                type="text"
                className={nameClasses}
                placeholder="First Last"
                name="user_name"
              />
              {nameHasError && (
                <p className={classes.error_text}>Please enter a name.</p>
              )}
            </label>
          </div>
          <div id="email" className={classes.contact_item}>
            <label className={classes.form_label}>
              Your Email
              <br />
              <input
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                id="name_input"
                type="text"
                className={emailClasses}
                placeholder="email@email.com"
                name="user_email"
              />
              {emailHasError && (
                <p className={classes.error_text}>
                  Please enter a valid email address.
                </p>
              )}
            </label>
          </div>
          <div
            id="message"
            className={`${classes.contact_item} ${classes.contact_msg}`}
          >
            <label>
              Message
              <br />
              <textarea
                value={messageValue}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                id="name_input"
                placeholder="What can I help you with?"
                className={messageClasses}
                name="message"
              />
              {messageHasError && (
                <p className={classes.error_text}>
                  Please submit a valid inquiry
                </p>
              )}
            </label>
          </div>
          <button
            disabled={!formIsValid}
            type="submit"
            className={classes.contact_button}
            onClick={toggleModal}
          >
            Send
          </button>
        </form>
      </div>
      {modal && <Modal onClick={toggleModal} />}
    </>
  );
};

export default Form;
