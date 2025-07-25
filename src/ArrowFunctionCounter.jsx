import { useState } from 'react';

//inline arrow function
import(useState);

function ArrowFunctionCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <p>Button pressed {count} times.</p>
    </div>
  );
}

export default ArrowFunctionCounter;
