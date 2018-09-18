import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize:4,
    currentPage:1
  };
  handleDelete = movie => {
    const { movies } = this.state;
    const newMovies = movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: newMovies
    });
  };

  handleLike = movie => {
    const newMovies = [...this.state.movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].like = !newMovies[index].like;
    newMovies[index] = { ...newMovies[index] };
    this.setState({
      movies: newMovies,
    });
  };
  handlePageChange = (page) => {
    this.setState({
      currentPage:page
    })
  };
  render() {
    const { movies:allMovies, currentPage, pageSize } = this.state;
    const { length: count } = allMovies;
    if (count === 0) return <h2>Please add movies</h2>;
    const movies = paginate(allMovies, currentPage, pageSize)
    return (
      <React.Fragment>
        <p>Number of movies {count}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    like={movie.like}
                    onLike={() => this.handleLike(movie)}
                  />
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination itemsCount={count} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage}/>
      </React.Fragment>
    );
  }
}

export default Movies;
