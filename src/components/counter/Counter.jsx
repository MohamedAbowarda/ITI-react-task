import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/counterSlice";

function Counter() {
const counterGlobalState = useSelector((state) => state.counterReducer.value);
const dispatch = useDispatch();
const handleIncrement = () => dispatch(increment());
const handleDecrement = () => dispatch(decrement());


  return (
    <div className="Counter my-5 container d-flex justify-content-evenly align-items-center">
      <Button onClick={handleIncrement} variant="primary">
        Increment
      </Button>
      <p>{counterGlobalState}</p>
      <Button onClick={handleDecrement} variant="secondary">
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
