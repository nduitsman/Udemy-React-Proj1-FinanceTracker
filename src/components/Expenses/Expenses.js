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
    const filteredExpenses = props.items.filter((expense) => {
        if(filteredYear === 'All') {
            return expense;
        } else {
            return expense.date.getFullYear().toString() === filteredYear;
        }

    })
    console.log(filteredYear);
    return (
        <Card className = 'expenses'>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} items={props}/>
            {filteredExpenses.map((expense)=> (
                <ExpenseItem 
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}/>
                ))}
        </Card>
      );
}

export default Expenses;
