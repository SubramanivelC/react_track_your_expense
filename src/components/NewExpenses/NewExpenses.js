import React, {useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{

	const [IsShowAddExpense, setIsShowAddExpense] = useState(false);


	const SaveExpenseDataHandler = (enteredExpenseData) =>{
		const ExpenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		console.log(ExpenseData);

		props.onAddExpenseData(ExpenseData);

	};

	const AddnewexpensesHandler = () => {
		setIsShowAddExpense(true);

	};
	const stopAddnewexpensesHandler = () => {
		setIsShowAddExpense(false);
	};



	return(
		<div className="new-expense">

		{ IsShowAddExpense === false && <button onClick = {AddnewexpensesHandler}>Add New Expenses</button>}
		{ IsShowAddExpense === true && <ExpenseForm  onSaveExpenseData={SaveExpenseDataHandler} onCancelHandler = {stopAddnewexpensesHandler}/>}
		
		
		
		</div>

		);
};

export default NewExpense;