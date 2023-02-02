import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'; 
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className = 'expenses'>
        <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear}/>
            {props.expenses.map((expense)=> {
                return (
                    <ExpenseItem 
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}/>
                    )
                })}
        </Card>
      );
}

export default Expenses;
