import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  // useSelector takes a funciton as an argument.
  // the state managed by redux and the slice needed is returned
  const counter = useSelector((state) => state.counter)

  const show = useSelector((state) => state.showCounter)

  // managed redux state is taken in, and the counter from the state is returned

  // COOL: REACT-REDUX WILL AUTOMATICALLY SETUP A SUBSCRIPTION WHEN USING USESELECTOR!!!!

  const dispatch = useDispatch()
  //  NO arguments. useDispatch() just returns a dispatch function that we can use to dispatch an action

  const incrementHandler = () => {
    dispatch({ type: 'INC' })
  }
  const incrementByFiveHandler = () => {
    dispatch({ type: 'INC5', payload: 5 })
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
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={incrementByFiveHandler}>+5</button>
        <button onClick={decerementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
