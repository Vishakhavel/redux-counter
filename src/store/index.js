import { createStore } from 'redux'
// 3. define an initial state for the reducer.
const initialState = { counter: 0, showCounter: true }

// 1. insert reducer function code.
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'INC5') {
    return {
      counter: state.counter + 5,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'DEC') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'TOGGLE') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    }
  }

  return state
}

// 2. create store, after defining reducer function.
const store = createStore(counterReducer)

export default store



