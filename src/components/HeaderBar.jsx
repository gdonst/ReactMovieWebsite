import React from 'react';  //adds reference to React libraries
import { Link } from 'react-router-dom';
import logo from '../photos/video-player-sign.png';

//this component has the website logo with a link back to the home page
const HeaderBar = function (props) {
    return (
        <div className="header-titles is-pulled-left">
            <Link to='/home'>
                <img src={logo} width="50px" height="50px"></img>
            </Link>
        </div>
    );
}

export default HeaderBar  //makes component available to other components