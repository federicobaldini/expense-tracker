import classes from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={classes["expenses-list__fallback"]}>Found no expenses.</h2>;
  }

  return (
    <ul className={classes["expenses-list"]}>
      {props.items.map((filteredExpense) => (
        <ExpenseItem
          key={filteredExpense.id}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
          date={filteredExpense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
