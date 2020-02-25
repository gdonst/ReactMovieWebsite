import React from "react";
import { Link } from 'react-router-dom';
import deleteImg from '../photos/icons8-delete-64.png';
import './FavoriteItem.css';

//This component creates one favorite item to be inserted into the favorites list
class FavoriteItem extends React.Component {
    //shows movie details if favorite item clicked
    handleViewClick = () => {
        this.props.showMovieDetails(this.props.movie);
    }
    
    //deltes the favorite item if the x is clicked
    handleDeleteClick = () => {
        this.props.deleteFav(this.props.movie.id);
    }
    
    render() {
        const imgURL = `https://image.tmdb.org/t/p/w92${this.props.movie.poster}`;
        return (
            <div>
                <figure>
                    <Link to='/details'>
                        <img alt="favorite movie" src={imgURL} className="image" onClick={ this.handleViewClick } title={this.props.movie.title} alt={this.props.movie.title} />
                    </Link>
                        <img src={deleteImg} className="delete" onClick={ this.handleDeleteClick } width="30px" height="30px"/>
                </figure>
            </div>
            );
        }
}

export default FavoriteItem