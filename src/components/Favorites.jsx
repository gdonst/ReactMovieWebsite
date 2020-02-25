import React from "react";
import FavoriteItem from './FavoriteItem.jsx';
import './Favorites.css';

//This component holds a set of favorites called by <FavoriteItem/>
class Favorites extends React.Component {
    //hides the favorite list content
    hideFav = () => {
        let content = document.querySelector("#favContent");
        content.classList.add("is-hidden");
        let upArrow = document.querySelector("#hiddenContent");
        upArrow.classList.remove("is-hidden");
    }
    
    //shows the favorite ist content
    showFav = () => {
        let content = document.querySelector("#favContent");
        content.classList.remove("is-hidden");
        let upArrow = document.querySelector("#hiddenContent");
        upArrow.classList.add("is-hidden");
    }

    render() {
        return (
            <section className="box">
                <div id="favContent">
                    <h1 className="title is-4">❤ Favorites</h1> 
                    <div className="columns is-multiline">
                        {this.props.movie && this.props.movie.map( (m) => <FavoriteItem movie={m.movie} key={m.movie.id} showMovieDetails={this.props.showMovieDetails} deleteFav={this.props.deleteFav} />)}
                    </div>
                    <div className="arrowPointer">
                        <i className="fa fa-arrow-circle-up" onClick={this.hideFav}></i>
                    </div>
                </div>
                <div id="hiddenContent" className="is-hidden">
                    <div className="arrowPointer">
                        <i className="fa fa-arrow-circle-down" onClick={this.showFav}></i>
                    </div>
                </div>
            </section> 
        );
    }
}

export default Favorites