import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" />
          <button className="menu-button">Menu</button>
        </header>
      </div>
    );
  }
}

export default App;
