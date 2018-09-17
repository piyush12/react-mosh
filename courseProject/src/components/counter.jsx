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
      <div className="row">
        <div className="col-1">
          <span className={this.badgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-large"
            onClick={() => this.props.onIncrement(this.props.counters)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-large m-2"
            onClick={() => this.props.onDecrement(this.props.counters)}
            disabled={this.props.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-large"
            onClick={() => this.props.onDelete(this.props.counters.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
