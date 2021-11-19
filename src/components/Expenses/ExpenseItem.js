import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {
  return (
    <Card className={classes["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
