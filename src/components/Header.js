import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Header Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>HOME</NavLink>----
        <NavLink to="/create" activeClassName="is-active">ADD EXPENSE</NavLink>----
        <NavLink to="/help" activeClassName="is-active">HELP</NavLink>----
    </header>
);

export default Header;