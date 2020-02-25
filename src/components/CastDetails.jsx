import React from "react";
import { Link } from 'react-router-dom';
import load from '../photos/ajax-loader.gif';
import CastCrewTabs from './CastCrewTabs.jsx';
import './CastDetails.css';

//This component will display an individual cast members details, along with the cast and crew list
class CastDetails extends React.Component { 
    render() {
        const imgURL = `https://image.tmdb.org/t/p/w185/${this.props.cast.profile_path}`;
        const imdb = `https://www.imdb.com/name/${this.props.cast.imdb_id}`;
        return (
            <div className="tile is-ancestor">
                <div className="tile is-8 is-parent">
                    {this.props.castDetailsLoaded ? ( this.props.cast.birthday == null ? (
                        <div id="castDetailsBox" className="tile is-child notification is-light columns">
                            <div className="title is-4 has-text-left-desktop column">
                                {this.props.cast.name}
                            </div>
                            <div className="column is-8">
                                <div id="closeCast">
                                    <Link to='/details'>
                                        <button className="button is-dark">Close</button>
                                    </Link>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Links</h1>
                                    <ul className="list">
                                        <li className="list-item"><a href={imdb} target="_blank" rel="noopener noreferrer">IMBD Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="castDetailsBox" className="tile is-child notification is-light columns">
                            <div className="title is-4 has-text-left-desktop column">
                                {this.props.cast.name}
                                <br/>
                                <img alt="cast image" src={imgURL} />
                            </div>
                            <div className="column is-8">
                                <div id="closeCast">
                                    <Link to='/details'>
                                        <button className="button is-dark">Close</button>
                                    </Link>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Birthday and Place of Birth</h1>
                                    <ul className="list">
                                        <li className="list-item">{this.props.cast.birthday}</li>
                                        <li className="list-item">{this.props.cast.place_of_birth}</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Biography</h1>
                                    <ul className="list">
                                        <li className="list-item">{this.props.cast.biography}</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h1 className="title is-5">Links</h1>
                                    <ul className="list">
                                        <li className="list-item"><a href={imdb} target="_blank" rel="noopener noreferrer">IMBD Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                                                    ) : (
                        <div id="loader">
                            <img alt="loading content" src={load} />
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

export default CastDetails