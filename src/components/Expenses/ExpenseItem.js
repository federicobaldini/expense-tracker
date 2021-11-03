import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className={styles['expense-item']}>
      <ExpenseDate date={props.date} />
      <div className={styles['expense-item__description']}>
        <h2>{props.title}</h2>
        <div className={styles['expense-item__price']}>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
