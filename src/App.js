import logo from './logo.svg';
import './App.css';
import Login from './UserAuth/Login';
import Register from './UserAuth/Register';
import './css/style.css'
import './css/register.css'
import './css/home.css'
import { Route, Routes } from 'react-router-dom';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
     <Routing/>
    
    </div>
  );
}

export default App;
