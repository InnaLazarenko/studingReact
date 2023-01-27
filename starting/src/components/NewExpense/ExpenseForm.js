import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [viewForm, setViewForm] = useState(false);

  const titleChangeHandler = (event) => {
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value}); */
    /*      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTitle: event.target.value
        }
      }); */
    setTitleInput(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };

    props.onSaveExpenseDate(expenseData);

    setTitleInput("");
    setAmountInput("");
    setDateInput("");

    setViewForm(false);
  };

  const addNewExpenseHandler = () => {
    setViewForm(true);
  };

  const cancelHandler = () => {
    setViewForm(false);
  };


  if (!viewForm) {
    return <button onClick={addNewExpenseHandler}>Add New Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleInput} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountInput}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateInput}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
