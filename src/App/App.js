import React, { Component } from 'react';

import Board from '../Board/container/Board.js'

import '../color.css';
import '../font.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
