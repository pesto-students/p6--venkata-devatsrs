import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <h1>Todo List</h1>
      </header>
      <Home></Home>

    </div>
  );
}

export default App;
