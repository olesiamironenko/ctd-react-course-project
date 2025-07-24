//useRef used in conjunction with useEffect to update a page title
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function PageTitleUpdatingCounter() {
  const [count, setCount] = useState(0);
  const title = useRef(document.querySelector('title'));

  useEffect(() => {
    // This code will run when the component first loads
    // and each time `count` changes
    title.current.text = `Times pressed: ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default PageTitleUpdatingCounter;
