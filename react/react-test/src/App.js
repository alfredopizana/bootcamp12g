import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <h1>{6 > 5 ? "Hola koders!!" : "adios koders!!"}</h1>
        <ul>
          {
            ["uno", "dos", "tres", "cuatro"].map(item => <li>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
/*
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

*/

export default App;
