import './Login.css'
import React from 'react';

export function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email:<input type='text'></input></label>
        <label>Password:<input type='text'></input></label>
        <button>OK</button>
      </div>
    </>
  )
}