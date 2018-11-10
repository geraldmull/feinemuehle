// text filter field
// e target value prints the items to the screen
// component that is writing to the store
// read and dispatch the store

// select option sort by date and amount with dispatch
// java script controlled input


import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render () {
        return (
        <div>
            <input
                type="text"
                value={this.props.filters.text}
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
            }} />
    
            <select
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {                    
                        if (e.target.value === 'date') {
                            props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            props.dispatch(sortByAmount());
                    }
                }}
            >    
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select> 

            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
        );
    }    
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

// 1 map state to props function // 2 takes the component expense list filters
export default connect(mapStateToProps)(ExpenseListFilters);