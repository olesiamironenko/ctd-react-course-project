import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter.jsx';
import TacoBuilder from './TacoBuilder';
import CreateUserForm from './CreateUserForm';
import AnotherCounter from './AnotherCounter';
import WebSocketComponent from './WebSocketComponent';
import ExampleComponent1 from './ExampleComponent1';
import ExampleComponent2 from './ExampleComponent2';
import PageTitleUpdatingCounter from './PageTitleUpdatingCounter';
import EmailInput from './EmailInput';
import ArrowFunctionCounter from './ArrowFunctionCounter';

function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <h2>1. Counter</h2>
        <Counter />
      </div>
      <div>
        <h2>2. Taco Builder</h2>
        <TacoBuilder />
      </div>
      <div>
        <h2>3. Create User</h2>
        <CreateUserForm />
      </div>
      <div>
        <h2>4. Counter with useEffect</h2>
        <AnotherCounter />
      </div>
      <div>
        <h2>5. Web Socket Component useEffect</h2>
        <WebSocketComponent />
      </div>
      <div>
        <h2>6. Effect with empty dependency array</h2>
        <ExampleComponent1 />
      </div>
      <div>
        <h2>7. Effect without dependencies</h2>
        <ExampleComponent2 />
      </div>
      <div>
        <h2>
          8. useRef used in conjunction with useEffect to update a page title
        </h2>
        <PageTitleUpdatingCounter />
      </div>
      <div>
        <h2>
          9. setEmail - a state update function provided as a callback by the
          parent component
        </h2>
        <div>
          <EmailInput setEmail={setEmail} />
          {email && <p>Submitted email: {email}</p>}
        </div>
      </div>
      <div>
        <h2>10. Arrow Function Counter</h2>
        <ArrowFunctionCounter />
      </div>
    </>
  );
}

export default App;
