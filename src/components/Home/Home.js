import { useState } from "react";
import classes from './Home.module.css';
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpenses/NewExpense";

const Home = (props) => {
  const [expenses, setExpenses] = useState([]);

  //update correctly dependent state
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className={classes['home']}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;