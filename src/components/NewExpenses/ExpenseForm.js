import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) =>{
	//const [UserInput, setUserInput] = useState({
	//											enteredTitle:'',
	//											enteredAmount:'',
	//											enteredDate:'',
	//												});

	const [EnteredTitle, setEnteredTitle] = useState('');
	const [EnteredAmount, setEnteredAmount] = useState('');
	const [EnteredDate, setEnteredDate] = useState('');

	const TitleHandler = (event) =>{
		return(
			setEnteredTitle(event.target.value)
			// setUserInput({
			//	...UserInput,
			//	enteredTitle:event.target.value,
			//});
			
			);
	};

	const AmountHandler = (event) =>{
		return(
			setEnteredAmount(event.target.value)
			// setUserInput({
			//	...UserInput,
			//	enteredAmount:event.target.value,
			//});
			
			);
	};

	const DateHandler = (event) =>{
		return(
			setEnteredDate(event.target.value)

			// setUserInput({
			//	...UserInput,
			//	enteredDate:event.target.value,
			//});
			);
	};

	const SubmitHandler = (event) =>{
		event.preventDefault();
		const ExpenseData = {

				title:EnteredTitle,
				amount:EnteredAmount,
				date: new Date(EnteredDate),
			}

			props.onSaveExpenseData(ExpenseData);
			setEnteredDate('');
			setEnteredTitle('');
			setEnteredAmount('');
			props.onCancelHandler();

			
	};

	return(
		<form onSubmit={SubmitHandler}>
		<div className='new-expense__controls'>
		
		<div className='new-expense__control'>
		<label>Title</label>
		<input type='text' value={EnteredTitle} onChange={TitleHandler}/>
		</div>

		<div className='new-expense__control'>
		<label>Amount</label>
		<input type='number' min='0.01' step='0.01' value={EnteredAmount} onChange={AmountHandler}/>
		</div>
		

		<div className='new-expense__control'>
		<label>Date</label>
		<input type='date' min='2019-01-01' max='2022-12-31' value={EnteredDate} onChange={DateHandler}/>
		</div>

		<div className='new-expense__action'>
		<button type='button' onClick={props.onCancelHandler}>Cancel</button>
		<button type='submit'>Add Expense</button>
		</div>
		
		
		</div>
		
		</form>

		);
};

export default ExpenseForm;