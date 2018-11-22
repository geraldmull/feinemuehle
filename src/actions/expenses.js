import uuid from 'uuid';
import database from '../firebase/firebase';

// redux make applikation scalable
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

// communicate with firebase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = { description, note, amount, createdAt };
  
      return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// START_REMOVE_EXPENSE from database
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
      });
    };
  };


// EDIT _EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

// SET_EXPENSES
// manipulate the redux store
// action generator
// add action to reducer
// arrow function that returns implicit expenses object
// provide type and data (expenses) 


export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

// START_SET_EXPENSES
// fetch all expense data once
// parse the data in an array
// dispatch SET_EXPENSES
// get data, parse data, get data in redux


export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };
  
