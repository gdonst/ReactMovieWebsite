import React from "react";
import SingleMovie from './SingleMovie.jsx';
import './MovieList.css';

//This component creates a movie list table that houses single movies
class MovieList extends React.Component {
    render() {
        if (this.props.movies.length >= 1) {
            return (
                <div><div className="title">Movie List / Matches</div>
                    <table className="table is-striped is-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="clickableSorts" onClick={()=> this.props.sortList("title")}>Title</th>
                                <th className="clickableSorts" onClick={()=> this.props.sortList("release_date")}>Release Date</th>
                                <th className="clickableSorts" onClick={()=> this.props.sortList("ratings")}>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.movies.map( (m) => <SingleMovie movie={m} key={m.id} showMovieDetails={this.props.showMovieDetails} addToFavs={this.props.addToFavs} /> )}
                        </tbody>
                    </table>
                </div>
            );
        } else
            return null; 
    }
}
export default MovieList