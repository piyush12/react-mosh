import React, { Component } from "react";

class Moviesform extends Component {
  state = {};
  render() {
    const { match, history } = this.props;
    return (
      <React.Fragment>
        <h1>Movies Name: {match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default Moviesform;
