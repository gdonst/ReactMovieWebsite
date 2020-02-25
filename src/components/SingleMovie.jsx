import React from "react";
import { Link } from 'react-router-dom';
import './SingleMovie.css';

//This component creates a single movie entry for the parent table component
class SingleMovie extends React.Component {
    //on click show movie details
    handleViewClick = () => {
        this.props.showMovieDetails(this.props.movie);
    }

    render() {
        const imgURL = `https://image.tmdb.org/t/p/w92${this.props.movie.poster}`;
        return (
            <tr>
                <td><Link to='/details'>
                        <img src={imgURL} onClick={ this.handleViewClick } title={this.props.movie.title} alt={this.props.movie.title} />
                    </Link>
                </td>
                <td>
                    <Link to='/details' style={{ textDecoration: 'none' }}>
                        <h3 onClick={ this.handleViewClick }>{this.props.movie.title}</h3>
                    </Link>
                </td>
                <td>{this.props.movie.release_date}</td>
                <td>{this.props.movie.ratings.average}</td>
                <td>
                    <Link style={{ textDecoration: 'none' }} to='/details'>
                        <button className="button is-dark" onClick={ this.handleViewClick }>View</button>
                    </Link>
                    <button className="button is-dark" onClick={()=> this.props.addToFavs(this.props.movie) }>❤</button>
                </td>
            </tr>
        );
    }
}

export default SingleMovie