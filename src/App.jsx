import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter.jsx';
import TacoBuilder from './TacoBuilder';
import CreateUserForm from './CreateUserForm';
import AnotherCounter from './AnotherCounter';

function App() {
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
        <h2>4. Counnter with useEffect</h2>
        <AnotherCounter />
      </div>
    </>
  );
}

export default App;
