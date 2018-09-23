import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Moviesform from "./components/moviesoform";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Notfound from "./components/not-found";
import Navbar from "./components/navbar";
import Loginform from "./components/loginform";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <Switch>
          <Route path="/login" component={Loginform} />
          <Route path="/movies/:id" component={Moviesform} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={Notfound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
