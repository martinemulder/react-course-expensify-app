import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log('App.js is running!');

// store.dispatch(addExpense({description: "Water bill", amount: 450, createdAt: 1525428000000}));
// store.dispatch(addExpense({description: "Gas bill", amount: 350, createdAt: 1525428000000}));
// store.dispatch(addExpense({description: "Rent", amount: 1350, createdAt: 1525628000000}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
