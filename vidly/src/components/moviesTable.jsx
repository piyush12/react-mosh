import React, { Component } from "react";
import PropTypes from "prop-types";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  static propTypes = {
    onLike: PropTypes.func.isRequired
  };

  columns = [
    {
      sort: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { sort: "genre.name", label: "Genre" },
    { sort: "numberInStock", label: "Stock" },
    { sort: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like like={movie.like} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(movie)}
        >
          {" "}
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        movies={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
