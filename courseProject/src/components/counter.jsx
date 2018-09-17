import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }
  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    return (
      <div>
        <span className={this.badgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-large"
          onClick={() => this.props.onIncrement(this.props.counters)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-large m-2"
          onClick={() => this.props.onDelete(this.props.counters.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
