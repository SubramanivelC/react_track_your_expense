import React from 'react';
import ExpenseIterm from './ExpenseIterm';
import './ExpenseList.css'

const ExpenseList = (props) =>{
  //let DisplayExpenses = <p>No expense found</p>;
   
  if (props.item.length === 0) {

    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>;}
    


  return(
  <ul className='expenses-list'>

  {

    props.item.map(expense => (<ExpenseIterm key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}/>))
  
}
</ul>
      
    );
};

export default ExpenseList;


    