import React from 'react'
import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
// 5. select required pieces of state.

// 6. dispatch actions to modify state.

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
