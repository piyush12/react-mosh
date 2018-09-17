import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counters={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
