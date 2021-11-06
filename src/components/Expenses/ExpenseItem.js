import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className={classes['expense-item']}>
      <ExpenseDate date={props.date} />
      <div className={classes['expense-item__description']}>
        <h2 className={classes['expense-item__h2']}>{props.title}</h2>
        <div className={classes['expense-item__price']}>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
