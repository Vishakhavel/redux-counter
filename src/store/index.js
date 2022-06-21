import { initial } from 'lodash'
import { createStore } from 'redux'
// import { createSlice } from '@reduxjs/toolkit'
// create a store
// create a reducer
const initialState = { counter: 0, showCounter: true }
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
      // even though in this action we don't really care about the showCounter variable state, we have to enter it here because redux simply overwrites the old state with what you return here!
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

const store = createStore(counterReducer)

export default store

// you can use state.counter++ return state in redux, but that would mutate the existing state. because objects and arrays are reference values in javascript. UNPREDICATBLE BEHAVIOURS, BUGS!
