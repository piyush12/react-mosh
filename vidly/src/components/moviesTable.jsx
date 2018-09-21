import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import PropTypes from "prop-types";
import TableBody from './common/tableBody';
import Like from './common/like';

class MoviesTable extends Component {
    
    static propTypes = {
        onLike: PropTypes.func.isRequired
    }

    columns = [
        {sort:'title', label:'Title'},
        {sort:'genre.name', label:'Genre'},
        {sort:'numberInStock', label:'Stock'},
        {sort:'dailyRentalRate', label:'Rate'},
        {key:'like', content: movie => <Like like={movie.like} onLike={() => this.props.onLike(movie)} />},
        {key:'delete', content: movie => (<button className="btn btn-danger m-2"  onClick={() => this.props.onDelete(movie)}> Delete</button>)}
    ];
    
    render() { 
        const {movies, sortColumn, onSort } = this.props;
        return (
            <table className="table">
            <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
            <TableBody data={movies} columns={this.columns}/>
            </table>
        );
    }
}

export default MoviesTable;