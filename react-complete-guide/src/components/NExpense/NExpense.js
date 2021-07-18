import React from 'react';

import './NExpense.css'
import ExForm from "./ExForm";

const NExpense = (props) => {
    const saveExpenseDataHandler = (enteredExData) => {
        const expenseData = {
            ...enteredExData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

    };

    return (
        <div className='new-expense'>
            <ExForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
    )

};


export default NExpense;
