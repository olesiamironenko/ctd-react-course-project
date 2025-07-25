//useEffect with empty dependency array
import { useEffect } from 'react';

const ExampleComponent1 = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <div>Example Component 1</div>;
};

export default ExampleComponent1;
