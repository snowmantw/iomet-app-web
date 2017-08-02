import React, { Component } from 'react';

import ConditionPanel from '../ConditionPanel/container/ConditionPanel.js';

import '../color.css';
import '../font.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<ConditionPanel />
      </div>
    );
  }
}

export default App;
