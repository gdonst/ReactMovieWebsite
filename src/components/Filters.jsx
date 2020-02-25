import React from "react";
import './Filters.css';

//This component has all the possible filters for the movie list
class Filters extends React.Component {

    //this will reset all filters applied
    clearAll = () => {
        this.props.resetFilters();
        document.querySelector("#searchBox").value = "";
        document.querySelector("#beforeRadio").checked = false;
        document.querySelector("#afterRadio").checked = false;
        document.querySelector("#betweenRadio").checked = false;
        document.querySelector("#beforeRadioText").value = "";
        document.querySelector("#afterRadioText").value = "";
        document.querySelector("#betweenRadioTextStart").value = "";
        document.querySelector("#betweenRadioTextEnd").value = "";
        document.querySelector("#belowRadio").checked = false;
        document.querySelector("#aboveRadio").checked = false;
        document.querySelector("#betweenRadioRatings").checked = false;
        document.querySelector("#belowSlider").value = document.querySelector("#belowSlider").defaultValue;
        document.querySelector("#aboveSlider").value = document.querySelector("#aboveSlider").defaultValue;
        document.querySelector("#betweenSliderStart").value = document.querySelector("#betweenSliderStart").defaultValue;
        document.querySelector("#betweenSliderEnd").value = document.querySelector("#betweenSliderEnd").defaultValue;
    }  
    
    //this will apply any selected filters
    applyFilters = () => {
        let searchBox = document.querySelector("#searchBox").value;
        let beforeRadio = document.querySelector("#beforeRadio").checked;
        let afterRadio = document.querySelector("#afterRadio").checked;
        let betweenRadio = document.querySelector("#betweenRadio").checked;
        let beforeRadioText = document.querySelector("#beforeRadioText").value;
        let afterRadioText = document.querySelector("#afterRadioText").value;
        let betweenRadioTextStart = document.querySelector("#betweenRadioTextStart").value;
        let betweenRadioTextEnd = document.querySelector("#betweenRadioTextEnd").value;
        let belowRadio = document.querySelector("#belowRadio").checked;
        let aboveRadio = document.querySelector("#aboveRadio").checked;
        let betweenRadioRatings = document.querySelector("#betweenRadioRatings").checked;
        let belowSlider = document.querySelector("#belowSlider").value;
        let aboveSlider = document.querySelector("#aboveSlider").value;
        let betweenSliderStart = document.querySelector("#betweenSliderStart").value;
        let betweenSliderEnd = document.querySelector("#betweenSliderEnd").value;
        
        this.props.applyFilters(searchBox, beforeRadio, afterRadio, betweenRadio, beforeRadioText, afterRadioText, betweenRadioTextStart, betweenRadioTextEnd, belowRadio, aboveRadio, betweenRadioRatings, belowSlider, aboveSlider, betweenSliderStart, betweenSliderEnd);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="title">Title</div>
                    <div className="control">
                        <input id="searchBox" className="input" type="text" placeholder="Filter by Movie Name"/>
                    </div>
                    <br/>
                    <div className="title">Year</div>
                    <div className="columns">
                        <div className="column">
                            <div className="control">
                                <label className="radio">
                                    <input id="beforeRadio" type="radio" name="answer"/>
                                    Before
                                </label>
                                <br/>
                                <br/>
                                <label className="radio">
                                    <input id="afterRadio" type="radio" name="answer"/>
                                    After
                                </label>
                                <br/>
                                <br/>
                                <label className="radio">
                                    <input id="betweenRadio" type="radio" name="answer"/>
                                    Between
                                </label>
                            </div>
                        </div>
                        <div className="column">
                            <input id="beforeRadioText" className="input" type="text" placeholder="Before"/>
                            <input id="afterRadioText" className="input" type="text" placeholder="After"/>
                            <input id="betweenRadioTextStart" className="input" type="text" placeholder="Between (Start)"/>
                            <input id="betweenRadioTextEnd" className="input" type="text" placeholder="Between (End)"/>
                        </div>
                    </div>
                    <div className="arrowPointerFilter">
                        <i className="fas fa-arrow-circle-left" onClick={this.props.hideFilters}></i>
                    </div>
                    <div className="title">Ratings</div>
                    <div className="columns">
                        <div className="column">
                            <div className="control">
                                <label className="radio">
                                    <input id="belowRadio" type="radio" name="answer"/>
                                    Below
                                </label>
                                <br/>
                                <br/>
                                <label className="radio">
                                    <input id="aboveRadio" type="radio" name="answer"/>
                                    Above
                                </label>
                                <br/>
                                <br/>
                                <label className="radio">
                                    <input id="betweenRadioRatings" type="radio" name="answer"/>
                                    Between
                                </label>
                            </div>
                        </div>
                        <div id="sliderArea" className="column">
                            <div>0<input id="belowSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                            <br/>
                            <div>0<input id="aboveSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                            <br/>
                            <div>0<input id="betweenSliderStart" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                            <div>0<input id="betweenSliderEnd" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                        </div>
                    </div>
                    <button className="button is-dark is-pulled-left" onClick={this.applyFilters}>Filter</button>
                    <button className="button is-dark is-pulled-right" onClick={this.clearAll}>Clear</button>
                </div>
            </div>
        );
    }
}

export default Filters