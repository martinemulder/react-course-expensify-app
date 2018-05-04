import React from 'react';
import { connect } from 'react-redux';

import getTotalExpenses from '../selectors/expenses-total';
import getExpensesCount from '../selectors/expenses-count';
import selectExpenses from '../selectors/expenses';


class ExpenseListHeader extends React.Component {

    render() {
        return (
            <div>
                <p>Number of expenses: {getExpensesCount(this.props.expenses)}</p>
                <p>Total amount: {getTotalExpenses(this.props.expenses)}</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseListHeader);
