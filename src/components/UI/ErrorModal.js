import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes["error-modal__backdrop"]}
      onClick={props.onConfirm}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes["error-modal__modal"]}>
      <header className={classes["error-modal__header"]}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes["error-modal__content"]}>
        <p>{props.message}</p>
      </div>
      <footer className={classes["error-modal__actions"]}>
        <button
          className={classes["error-modal__button"]}
          onClick={props.onConfirm}
        >
          OK
        </button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
