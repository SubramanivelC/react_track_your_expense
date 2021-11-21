import React, {useState} from 'react';
import ExpeseList from './ExpenseList'
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'



  const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const GetYearChangedValueHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
    };

    const FilteredYearArray = props.item.filter(expense =>
      {return expense.date.getFullYear().toString() === filteredYear});
    
  return (
    <div>
    <Card className='expenses'>

    <ExpensesFilter selected={filteredYear} onGetYearChangedValue = {GetYearChangedValueHandler} />
    <ExpeseList item={FilteredYearArray} />
    
    </Card>
    </div>
  );
};

export default Expense;



