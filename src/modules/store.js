import addName from './action.js';

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addName('Learn about actions'))
store.dispatch(addName('Learn about reducers'))
store.dispatch(addName('Learn about store'))

// Stop listening to state updates
unsubscribe()
