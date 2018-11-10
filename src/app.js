// components are split into files, easier to maintain
import React from 'react';
import ReactDOM from 'react-dom';
// 1 setup provider for components in the application
import { Provider } from 'react-redux';
//import myApp from './components/myapp';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gass Bill', amount: 3000  }));
store.dispatch(addExpense({ description: 'Rent', amount: 8764578 }));



// store.dispatch(setTextFilter(''));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));
// }, 3000)




const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(store.getState());

// provider give components access to the store
// 2 this code will not be changed
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// render with passed options
ReactDOM.render(jsx, document.getElementById('app'));
