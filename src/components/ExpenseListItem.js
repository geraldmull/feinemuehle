import React from 'react';
import { Link } from 'react-router-dom';

// link items heading to the edit page
const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt }</p>
        <p>{note}</p>

    </div>
);

// (no state needed)
export default ExpenseListItem;

/* <button 
onClick={(e) => {
    props.handleDeleteOption(props.optionText);
}}
>REMOVE</button> */