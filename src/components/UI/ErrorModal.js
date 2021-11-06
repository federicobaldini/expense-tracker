import { Fragment } from "react";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes['error-modal__backdrop']} onClick={props.onConfirm} />
      <div className={classes['error-modal__modal']}>
        <header className={classes['error-modal__header']}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes['error-modal__content']}>
          <p>{props.message}</p>
        </div>
        <footer className={classes['error-modal__actions']}>
          <button className={classes['error-modal__button']} onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;