//useEffect with no dependency array
import { useEffect } from 'react';

const ExampleComponent2 = () => {
  useEffect(() => {
    console.log('Effect without dependencies - runs on every render');
  });

  return <div>Example Component 2</div>;
};

export default ExampleComponent2;
