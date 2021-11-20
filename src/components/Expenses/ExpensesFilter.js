import React from 'react';
import './ExpensesFilter.css'


const ExpensesFilter = (props) =>{

	const YearChangeHandler = (event) =>{
		const YearChangedValue = event.target.value;
		props.onGetYearChangedValue(YearChangedValue);

	};

	return(

		<div className='expenses-filter'>
		<div className='expenses-filter__control'>
			<label> Select the Year</label>
			<select value={props.selected} onChange={YearChangeHandler}>
			<option>2022</option>
			<option>2021</option>
			<option>2020</option>
			<option>2019</option>
			</select>
		</div>


		</div>

		);
};

export default ExpensesFilter;