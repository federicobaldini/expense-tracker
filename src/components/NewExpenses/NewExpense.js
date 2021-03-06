import classes from "./NewExpense.module.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button/Button"

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes["new-expense"]}>
      {!isEditing ? (
        <Button type="button" onClick={startEditingHandler}>
          Add New Expense
        </Button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
