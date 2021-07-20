import React, {useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (pickYear) => {
        setFilterYear(pickYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;

    });


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    picked={filterYear}
                    onChangeMenu={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses}/>


            </Card>
        </div>

    )
}

export default Expenses;
