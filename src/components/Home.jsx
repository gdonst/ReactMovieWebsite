import React from "react";
import { Link } from 'react-router-dom';
import imgUrl from '../photos/peter-lewicki-Wfh650C1OHU-unsplash.jpg';
import './Home.css';

//This component is the home page that the user will see upon website visit, or clicking the website logo
class Home extends React.Component {

    render() {
        return (
            <div className="box"
                style = {{ backgroundImage: `url(${imgUrl})`,
                    height: '800px',
                        backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                         }}>
                <div>
                    <div className="container is-fluid">
                        <div className="notification">
                            <h1 className="title is-2 is-dark">Movie Browser</h1>
                            <label className="label is-large" for="search">Title: </label>
                            <input className="input is-dark" id="searchBox" type="text"name="search"/>
                            <p>
                                <Link to='/browse'>
                                    <button className="button is-dark is-pulled-left" onClick={()=> { this.props.searchFilter(document.querySelector("#searchBox").value) }}>
                                        Show Matching Movies
                                    </button>
                                </Link>
                                <Link to='/browse'>
                                    <button className="button is-dark is-pulled-right" onClick={this.props.resetFilters}>Show All Movies</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="content has-text-centered">Photo by Peter Lewicki on Unsplash</div>
                </div>
            </div>
        );
    }
}   

export default Home