import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <p>{counter}</p>
      <button type="button" onClick={decrement}>
        Count Down
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={increment}>
        Count Up
      </button>
    </>
  );
}

export default Counter;
