import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {props.items
        .filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        )
        .map((filteredExpense) => (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
