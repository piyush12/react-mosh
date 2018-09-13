import React, { Component } from 'react';
import Counters from './components/counters';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
          <Counters />
      </main>
    );
  }
}

export default App;
