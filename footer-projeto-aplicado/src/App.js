import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3">
          <a class="text-dark" href="https://www.alterdata.com.br/">Alterdata </a>
          - Grupo 3
        </div>
      </footer>
    </div>
  );
}

export default App;
