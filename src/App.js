import { useState, Fragment } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  //update correctly dependent state
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Fragment>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Fragment>
  );
};

export default App;
