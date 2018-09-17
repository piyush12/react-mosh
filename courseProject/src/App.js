import React, {
  Component
} from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // hadle delete
  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters: newCounters
    });
  };

  // handle reset
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters
    });
  };

  // handle increment
  handleIncrement = counter => {
    const countersClone = [...this.state.counters];
    const index = countersClone.indexOf(counter);
    countersClone[index].value++;
    this.setState({
      counters: countersClone
    });
  };

  render() {
    return (
    <React.Fragment>
      <Navbar counter={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }

}

export default App;