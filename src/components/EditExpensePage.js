import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }}
        expense={props.expense}
      />
      <button onClick={() => {
        props.dispatch(startRemoveExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove
      </button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);