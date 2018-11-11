
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


// console.log('testing dev environment');
// console.log(store.getState());
// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gass Bill', amount: 3000  }));
// store.dispatch(addExpense({ description: 'Rent', amount: 8764578 }));

// store.dispatch(setTextFilter(''));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// provider give components access to the store
// 2 this code will not be changed

// render with passed options

// components are split into files, easier to maintain
// 1 setup provider for components in the application
