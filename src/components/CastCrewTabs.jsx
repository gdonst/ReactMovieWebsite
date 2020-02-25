import React from "react";
import load from '../photos/ajax-loader.gif';
import SingleCast from './SingleCast.jsx';
import SingleCrew from './SingleCrew.jsx';
import './CastCrewTabs.css';

//This function will open the tab depending on what is clicked
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}

//This component was created in relation/reference to: https://codepen.io/t7team/pen/ZowdRN
class CastCrewTabs extends React.Component {  
    render() {
        return (
            <div>
                {this.props.dataDetailsLoaded ? (
                    <div id="crewTabs" className="tile is-child notification is-light">
                        <section className="hero is-dark">
                            <div className="hero-foot">
                                <nav className="tabs is-boxed is-fullwidth is-large">
                                    <div className="container">
                                        <ul>
                                            <li className="tab is-active" onClick={(e) => openTab(e,'Cast')}><a style={{ textDecoration: 'none' }}>Cast</a></li>
                                            <li className="tab" onClick={(e) => openTab(e,'Crew')}><a style={{ textDecoration: 'none' }}>Crew</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </section>
                        <div className="container section">
                            <div id="Cast" className="content-tab" >
                                <table class="table is-striped is-bordered">
                                    <thead>
                                        <tr>
                                            <th>Character</th>
                                            <th>Name</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.movie.production.cast != null ? this.props.movie.production.cast.map( (c) => <SingleCast cast={c} key={c.id} showCastDetails={this.props.showCastDetails}/>) : <tr><td>Movie is missing cast data.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                            <div id="Crew" className="content-tab" style={{display:'none'}}>
                                <table class="table is-striped is-bordered">
                                    <thead>
                                        <tr>
                                            <th>Department</th>
                                            <th>Job</th>
                                            <th>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.movie.production.crew.sort(function(a, b) {  
                                            if (a.department > b.department) {  
                                                return 1;  
                                            } else if (a.department < b.department) {  
                                                return -1;  
                                            }  
                                            return 0;  
                                        }).map( (c) => <SingleCrew crew={c} key={c.id}/>)
                                               } 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="loader">
                        <img alt="content loading" src={load} />
                    </div>
                )}
            </div>
        );
    }
}

export default CastCrewTabs