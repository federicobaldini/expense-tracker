import { useState, Fragment } from "react";
import classes from "./ExpenseForm.module.css";
import ErrorModal from "../UI/Modal/ErrorModal";
import Button from "../UI/Button/ButtonSquare"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState({title: "", message: ""});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const errorHandler = () => {
    setError({title: "", message: ""});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid title, amount and date (non-empty values).",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
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
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={classes["expense-form__control"]}>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className={classes["expense-form__control"]}>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2020-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={classes["expense-form__actions"]}>
          <Button type="button" onClick={props.onCancel}>Cancel</Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
