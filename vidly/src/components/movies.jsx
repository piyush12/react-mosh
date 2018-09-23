import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    sortColumn: { sort: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      genres
    });
  }

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
      movies: newMovies
    });
  };
  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  hadleGenreSelect = genre => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    });
  };
  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };
  getPagedata = () => {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.sort], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { movies: allMovies, currentPage, pageSize, sortColumn } = this.state;
    const { length: count } = allMovies;
    if (count === 0) return <h2>Please add movies</h2>;
    const { totalCount, data: movies } = this.getPagedata();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.hadleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Number of movies {totalCount}</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
