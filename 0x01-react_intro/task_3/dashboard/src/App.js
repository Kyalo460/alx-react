import './App.css';
import holoberton_logo from './holberton_logo.jpg'
import {getFullYear, getFooterCopy} from './utils'
import { Notifications } from './Notifications';

function App() {
  return (
    <div className="App">
      <Notifications />
      <header>
        <div className="App-header">
          <img src={holoberton_logo} alt=""></img>
          <h1>School Dashboard</h1>
        </div>
        <hr></hr>
      </header>
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email:<input type='text'></input></label>
        <label>Password:<input type='text'></input></label>
        <button>OK</button>
      </div>
      <hr></hr>
      
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
