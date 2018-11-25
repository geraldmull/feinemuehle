import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// link items heading to the edit page
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );

// (no state needed)
export default ExpenseListItem;

/* <button 
onClick={(e) => {
    props.handleDeleteOption(props.optionText);
}}
>REMOVE</button> */