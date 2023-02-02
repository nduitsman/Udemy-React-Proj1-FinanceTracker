import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Student Loan",
      amount: 649,
      date: new Date(2021, 6, 1),
    },
    {
      id: "e6",
      title: "Storage Unit",
      amount: 228,
      date: new Date(2021, 7, 1),
    },
];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses expenses = { expenses } />
    </div>
  )
}

export default App;
