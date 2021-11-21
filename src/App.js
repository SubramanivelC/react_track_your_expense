  import React, {useState} from 'react';
import Expense from './components/Expenses/Expense'
import './App.css';
import NewExpense from './components/NewExpenses/NewExpenses'



const OldExpenses = [
  {
    id:1,
    title: 'Home rent',
    amount: 100,
    date: new Date(2021,11,13)
  },
  {
    id:2,
    title: 'EMI',
    amount: 150,
    date: new Date(2021,11,1)
  },
  {
    id:3,
    title: 'Travel',
    amount: 30,
    date: new Date(2021,11,3)
  },
  {
    id:4,
    title: 'Educational Fee',
    amount: 60,
    date: new Date(2019,11,7)
  },
  ]

function App() {

  const [expenses, setexpenses] = useState(OldExpenses);

  const AddExpenseDateHandler = (expense) =>{

    
    setexpenses((prevexpense) =>{ 
      return[expense, ...prevexpense];});



  };


  return (
    <div className="App">

  
    <NewExpense onAddExpenseData = {AddExpenseDateHandler} />
    <Expense item={expenses}/>
    
    </div>
  );
}

export default App;
