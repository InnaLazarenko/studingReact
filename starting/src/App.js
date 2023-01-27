import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car insurence",
    amount: 256.21,
    date: new Date(2020, 2, 8),
  },
  {
    id: "2",
    title: "Car insurence",
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },
  {
    id: "3",
    title: "Car insurence",
    amount: 256.21,
    date: new Date(2022, 2, 8),
  },
  {
    id: "4",
    title: "Car insurence",
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
