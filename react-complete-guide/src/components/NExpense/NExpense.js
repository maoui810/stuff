import React, {useState} from 'react';

import './NExpense.css'
import ExForm from "./ExForm";

const NExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExData) => {
        const expenseData = {
            ...enteredExData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

    };

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    )

};


export default NExpense;
