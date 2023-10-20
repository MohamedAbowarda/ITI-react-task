import { useState } from "react";
import Button from "react-bootstrap/Button";
function Counter() {
  const [counter, setcounter] = useState(200);

  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setcounter(counter - 1);
  };
  return (
    <div className="Counter my-5 container d-flex justify-content-evenly align-items-center">
      <Button onClick={increment} variant="primary">
        Increment
      </Button>
      <p>{counter}</p>
      <Button onClick={decrement} variant="secondary">
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
