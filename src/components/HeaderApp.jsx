import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import About from './About.jsx';
import './Header.css';

//This component is the header that hold the header components
const HeaderApp = function (props) {
    return (
        <header className="hero medium is-info">
            <div className="hero-body">
                <HeaderBar />
                <About />
            </div>
        </header>
    );
}

export default HeaderApp;