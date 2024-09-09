import './App.css';
import React from 'react';
import { Notifications } from '../Notifications/Notifications';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <hr></hr>
        <Footer />
      </div>
    </>
  );
}

export default App;
