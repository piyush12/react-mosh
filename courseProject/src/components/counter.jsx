import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    return (
      <div>
        <span className={this.badgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-large"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-large m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
