import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies : getMovies()
    }
    handleDelete = (movie) => {
        const {movies} = this.state;
        const newMovies = movies.filter(m => m._id !== movie._id);
        this.setState({
            movies : newMovies
        });
    }
    render() {
        const {movies} = this.state;
        const {length : count} = this.state.movies;
        if(count === 0) return <h2>Please add movies</h2>
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
                    { movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                        </tr>
                    ))}    
                    </tbody>
                </table>
            </React.Fragment>
            
        );
    }
}
 
export default Movies;