import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";


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
                {filteredExpenses.length === 0 ? (<p>No expenses found.</p>
                ) : (
                    filteredExpenses.map((expense, index) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}

                        />
                    ))

                )}


            </Card>
        </div>

    )
}

export default Expenses;
