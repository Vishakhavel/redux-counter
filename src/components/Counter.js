import React from 'react'
import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
// 5. consumer the state -> select required pieces of state.
const counter = useSelector((state) => state.counter)
const show = useSelector((state) => state.showCounter)

// 6. modify the state -> dispatch actions to modify state.
const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'INC' })
  }
  const incrementByFiveHandler = () => {
    dispatch({ type: 'INC5' })
  }

  const decerementHandler = () => {
    dispatch({ type: 'DEC' })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>Counter value : {counter}</div>}
      {!show && <div className={classes.value}>Counter hidden!</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={incrementByFiveHandler}>+5</button>
        <button onClick={decerementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>{show ? 'Hide' : 'Show'}</button>
    </main>
  )
}

export default Counter
