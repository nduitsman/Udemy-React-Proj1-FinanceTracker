import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };
    
    const usedYears = props.items.items.map((item)=> item.date.getFullYear());
    let distinctYears = [...new Set(usedYears)];

    const options = [];
    for (let year = 2023; year >= 1989; year--) {
      if (distinctYears.includes(year)){
        options.push(<option key ={year} value = {year}>{year}</option>);
      }
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option key ='all' value = 'All'>All</option>
          { options }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;