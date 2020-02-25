import React from "react";
import { Link } from 'react-router-dom';
import load from '../photos/ajax-loader.gif';
import './MovieDetails.css';
import CastCrewTabs from './CastCrewTabs.jsx';
import SingleMovieImage from './SingleMovieImage.jsx';
import AverageRating from './AverageRating.jsx';

//This component is the movie details plus the cast and crew component
class MovieDetails extends React.Component {

    render() {
        console.log("movie: " + this.props.movie);
        const imdb = `https://www.imdb.com/title/${this.props.movie.imdb_id}`;
        const moviedb = `https://www.themoviedb.org/movie/${this.props.movie.tmdb_id}`;
        return (
            <div className="tile is-ancestor">
                <div className="tile is-8 is-parent">
                    {this.props.dataDetailsLoaded ? (
                        <div id="castDetails" className="tile is-child notification is-light columns">
                            <div className="title is-4 has-text-left-desktop column">
                                {this.props.movie.title}
                                <SingleMovieImage movie={this.props.movie}/>
                            </div>
                            <div className="column is-8">
                                <div id="addToFavs">
                                    <button className="button is-dark" onClick={()=> this.props.addToFavs(this.props.selectedMovie) }>Add To Favorites</button>
                                    <Link to='/browse'>
                                        <button className="button is-dark is-pulled-right">Close</button>
                                    </Link>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Info</h1>
                                    <ul className="list">
                                        <li className="list-item">Release Date: {this.props.movie.release_date}</li>
                                        <li className="list-item">Revenue: {this.props.movie.revenue}</li>
                                        <li className="list-item">Runtime: {this.props.movie.runtime}</li>
                                        <li className="list-item">Tagline: {this.props.movie.tagline}</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Links</h1>
                                    <ul className="list">
                                        <li className="list-item"><a href={imdb} target="_blank" rel="noopener noreferrer">IMBD Page</a></li>
                                        <li className="list-item"><a href={moviedb} target="_blank" rel="noopener noreferrer">TMBD Page</a></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Overview</h1>
                                    <ul className="list">
                                        <li className="list-item">{this.props.movie.details.overview}</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Ratings</h1>
                                    <ul className="list">
                                        <li className="list-item">Popularity: {this.props.movie.ratings.popularity}</li>
                                        <li className="list-item">Average: <AverageRating rating={this.props.movie.ratings.average}/></li>
                                        <li className="list-item">Count: {this.props.movie.ratings.count}</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Companies</h1>
                                    <ul className="list">
                                        {this.props.movie.production.companies != null ? this.props.movie.production.companies.map ( (m) => <li className="list-item">{m.name}</li> ) : <li className="list-item">Movie is missing company data.</li>}
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Countries</h1>
                                    <ul className="list">
                                        {this.props.movie.production.countries != null ? this.props.movie.production.countries.map ( (m) => <li className="list-item">{m.name}</li> ) : <li className="list-item">Movie is missing country data.</li>}
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Keywords</h1>
                                    <ul className="list">
                                        {this.props.movie.details.keywords != null ? this.props.movie.details.keywords.map ( (m) => <li className="list-item">{m.name}</li> ) : <li className="list-item">Movie is missing keywords data.</li>}
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Genres</h1>
                                    <ul className="list">
                                        {this.props.movie.details.genres != null ? this.props.movie.details.genres.map ( (m) => <li className="list-item">{m.name}</li>) : <li className="list-item">Movie is missing genre data.</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="loader">
                            <img alt="content is loading" src={load} />
                        </div>
                    )}
                </div>
                <div className="tile is-parent">
                    <CastCrewTabs movie={this.props.movie} dataDetailsLoaded={this.props.dataDetailsLoaded} showCastDetails={this.props.showCastDetails}/>
                </div>
            </div>
        );
    }
}

export default MovieDetails