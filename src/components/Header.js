import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="active" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="active" to="/edit">Edit Expensive</NavLink>
        <NavLink activeClassName="active" to="/help">Help</NavLink>
    </header>
);

export default Header;