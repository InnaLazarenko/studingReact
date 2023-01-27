import { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const saveYearHandler = (savedYear) => {
    setYear(savedYear);
  };

  const filteredExpensesByYear = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveYear={saveYearHandler} />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpensesList items={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
