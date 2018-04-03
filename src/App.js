import React, { Component } from 'react';
import './App.css';

// Components
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          TEST
        </h1>
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
