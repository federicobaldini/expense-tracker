import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: 'car insurance', amount: 267.89, date: new Date(2021, 7, 28) },
    { id: 2, title: 'car insurance', amount: 267.89, date: new Date(2021, 7, 28) },
    { id: 3, title: 'car insurance', amount: 267.89, date: new Date(2021, 7, 28) }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
