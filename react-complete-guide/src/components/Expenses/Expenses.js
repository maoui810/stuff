import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = pickYear => {
        setFilterYear(pickYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter picked={filterYear} onChangeMenu={filterChangeHandler}/>
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>))}

            </Card>
        </div>

    )
}

export default Expenses;
