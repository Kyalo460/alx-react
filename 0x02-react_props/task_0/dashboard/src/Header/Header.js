import holberton_logo from '../assets/holberton_logo.jpg'
import './Header.css'
import React from 'react';

export function Header() {
  return (
    <>
      <header>
        <div className="App-header">
          <img src={holberton_logo} alt=""></img>
          <h1>School Dashboard</h1>
        </div>
        <hr></hr>
      </header>
    </>
  );
}