import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpense: "Delhi",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpense: "Aligarh",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpense: "jaipur",
    },
  ];
  const ExpenseItemsArr = []
  expenses.forEach(item=>{
    ExpenseItemsArr.push(<ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
      locationOfExpense = {item.locationOfExpense}
      ></ExpenseItem>);
  })

  return (
    <div>
      <h2>Let's get started!</h2>
      {ExpenseItemsArr}
    </div>
  );
}

export default App;