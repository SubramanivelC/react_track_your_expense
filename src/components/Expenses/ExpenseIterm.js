import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseIterm.css';
import Card from '../UI/Card'




const ExpenseIterm = (props) => {
	console.log("usestated used")

	


	//let title = props.title
	// body...
	return(
		<li>
		<Card className='expense-item'>

			 
		<ExpenseDate date={props.date} />
		<div className='expense-item__description'><h2>{props.title}</h2></div>
		<div className='expense-item__price'>${props.amount}</div>
		
		 
		</Card>
		</li>
		
		

		);
}

export default ExpenseIterm