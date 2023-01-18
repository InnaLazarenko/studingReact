import Expenses from './components/Expenses';

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
