//useEffect with dependency array
import { useState } from 'react';
import { useEffect } from 'react';

function AnotherCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code will run when the component first loads
    // and each time `count` changes
    if (count === 0) {
      console.log(`Count has started at: ${count}`);
    } else {
      console.log(`Count has changed to: ${count}`);
    }
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count} </p>
    </>
  );
}

export default AnotherCounter;
