import './App.css';
import holoberton_logo from './holberton_logo.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={holoberton_logo} alt=""></img>
          <h1>School Dashboard</h1>
          <hr></hr>
        </div>
      </header>
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <hr></hr>
        </div>
      </body>
      <footer>
        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
