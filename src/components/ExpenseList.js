// stateless functional component
import React from 'react';

// higher order components with the connect function from redux
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
         expenses: selectExpenses(state.expenses, state.filters)       
    };
};

export default connect(mapStateToProps)(ExpenseList);