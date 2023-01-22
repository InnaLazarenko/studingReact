import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
  {
    id: 'e1',
    title: 'Car insurence',
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },
  {
    id: 'e2',
    title: 'Car insurence',
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },
  {
    id: 'e3',
    title: 'Car insurence',
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },{
    id: 'e3',
    title: 'Car insurence',
    amount: 256.21,
    date: new Date(2021, 2, 8),
  },];

  const addExpenseHandler = expense => {

    console.warn('App: expense',expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
