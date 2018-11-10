// setup of the data store
import { createStore } from 'redux';

// pass function state in
// state = default state object
// action generators simplify, object do not have to defined several times

// actions are communicating with store
// objects have a single property type

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// reducer function
const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {

        // meanfull changes to the state
        // pass in action to dynamic object
        // variable incrementBy equal to ternary operator equal to a number
        // condition after questionmark is true
        // ? dreiteiliger operator, if anweisungen lassen sich sehr kurz schreiben 
        
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

// function gets called everytime the store changes
// type is no dynamic action
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount({}));

store.dispatch(decrementCount({}));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -101 }));


/* // manual create action objects
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// everything else is ignored
//unsubscribe();

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
})
 */
