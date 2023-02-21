import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
   /*  dispatch({ type: "increment" }); */
  };
  const increaseHandler = () => {
    dispatch(/* { type: "increase", amount: 5 } */ counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(/* { type: "decrement" } */ counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(/* { type: "toggle" } */ counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
