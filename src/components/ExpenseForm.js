import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// do not use date api is too complex
//const date = new Date();

// moment has better usability

// setup note state
// setup onchange and value for textarea
// amount enforce specific format
// attention firefox and chrom handle amount rexex different
// intergration of the single date picker

// const date = new Date();
// || logical or operator

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''

    };

  }

onDescriptionChange = (e) => {
  const description = e.target.value;
  this.setState(() => ({ description }));
};
onNoteChange = (e) => {
  const note = e.target.value;
  this.setState(() => ({ note }));
};
onAmountChange = (e) => {
  const amount = e.target.value;

  if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    this.setState(() => ({ amount }));
  }
};
// condition that the date cannot be deleted
onDateChange = (createdAt) => {
if (createdAt) {
    this.setState(() => ({ createdAt }));
}

};
onFocusChange = ({ focused }) => {
  this.setState(() => ({ calendarFocused: focused }));
};

// handler for form submit
// error handling function when no description and amount is entered
onSubmit = (e) => {

  e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount'}));
      // Set error state equal to 'Please provide description and amount.'
    } else {
      // clear the error
      this.setState(() => ({ error: '' }));
      console.log('submitted');
      // pass data when form is submitted
      this.props.onSubmit({
          description: this.state.description,
          amount: parseFloat(this.state.amount, 10) * 100,
          createdAt: this.state.createdAt.valueOf(),
          note: this.state.note
      })
    }
};
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
           <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
