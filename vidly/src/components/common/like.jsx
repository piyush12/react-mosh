import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { like } = this.props;
    let classes = "fa fa-heart";
    if (!like) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onLike}
      />
    );
  }
}

export default Like;
