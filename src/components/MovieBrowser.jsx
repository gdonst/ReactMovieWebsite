import React from "react";
import MovieList from './MovieList.jsx';
import Filters from './Filters.jsx';
import load from '../photos/ajax-loader.gif';
import './MovieBrowser.css';

//This component is the main browser page housing the filters and movie list
class MovieBrowser extends React.Component {

    //hide the filters component
    hideFilters = () => {
        let content = document.querySelector("#filterContent");
        content.classList.add("is-hidden");
        let upArrow = document.querySelector("#hiddenContentFilter");
        upArrow.classList.remove("is-hidden");
    }

    //show the filters component
    showFilters = () => {
        let content = document.querySelector("#filterContent");
        content.classList.remove("is-hidden");
        let upArrow = document.querySelector("#hiddenContentFilter");
        upArrow.classList.add("is-hidden");
    }

    render() {
        const dataLoaded = this.props.dataLoaded;
        return (
            <div className="tile is-ancestor">
                <div id="filterContent" className="tile is-4 is-parent">
                    <div id="filterList" className="tile is-child notification is-light">
                        <Filters applyFilters={this.props.applyFilters} resetFilters={this.props.resetFilters} hideFilters={this.hideFilters} showFilters={this.showFilters}/>
                    </div>
                </div>
                <div id="hiddenContentFilter" className="tile is-1 is-parent is-hidden">
                    <div id="filterList" className="tile is-child notification is-light">
                        <div>
                            <div id="rightArrow" className="arrowPointerFilter">
                                <i className="fa fa-arrow-circle-right" onClick={this.showFilters}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div id="movieList" className="tile is-child notification is-light">
                        {dataLoaded ? (
                            <div>
                                <MovieList movies={this.props.movies} showMovieDetails={this.props.showMovieDetails} addToFavs={this.props.addToFavs} sortList={this.props.sortList}/>
                            </div>
                        ) : (
                            <div id="loader">
                                <img alt="content loading" src={load} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieBrowser