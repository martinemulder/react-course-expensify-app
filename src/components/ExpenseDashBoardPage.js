import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListHeader from './ExpenseListHeader';

const ExpenseDashboardPage = () => (
    <div>
        <h1>This is a dashboard component.</h1>
        <ExpenseListHeader />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;