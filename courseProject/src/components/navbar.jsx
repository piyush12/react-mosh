import React, { Component } from "react";

const Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{props.counter}</span></span>
        </nav>
      </div>
    );
}

export default Navbar;
