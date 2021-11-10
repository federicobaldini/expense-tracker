import { useState, Fragment, useRef } from "react";
import classes from "./ExpenseFormRef.module.css";
import ErrorModal from "../components/UI/Modal/ErrorModal";

const ExpenseFormRef = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();
  const [error, setError] = useState({ title: "", message: "" });

  const errorHandler = () => {
    setError({ title: "", message: "" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid title, amount and date (non-empty values).",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
  };

  return (
    <Fragment>
      {(error.title !== "" || error.message !== "") && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes["expense-form__controls"]}>
          <div className={classes["expense-form__control"]}>
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
          </div>
          <div className={classes["expense-form__control"]}>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
          </div>
          <div className={classes["expense-form__control"]}>
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2022-12-31"
              ref={dateInputRef}
            />
          </div>
        </div>
        <div className={classes["expense-form__actions"]}>
          <button
            className={classes["expense-form__button"]}
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button className={classes["expense-form__button"]} type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseFormRef;
