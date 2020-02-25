import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

//The following link was used to create the modal for this about page: https://codepen.io/Laumak/pen/pRJzGL
const Modal = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
        return null;
    }

    return(
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        {children}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div>
        </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}

//This component is a popup to show credits in the about page for the website
class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {    
        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
    }

    render() {
        return(
            <div className="container">
                <button className="button is-dark is-pulled-right" onClick={this.toggleModal}>About</button>

                <Modal 
                    closeModal={this.toggleModal} 
                    modalState={this.state.modalState} 
                    title="About"
                    >
                    <div>
                        <div>Website Author: Grant Donst</div>
                        <div><a href="https://github.com/gdonst/ReactMovieWebsite" target="_blank" rel="noopener noreferrer">Github Repository</a></div>
                        <br/>
                        <div>Technology/Resources Used: </div>
                        <ul>
                            <li>React</li>
                            <li>Cdnjs for Web Related Libraries</li>
                            <li>Bulma v0.8.0 CSS Framework</li>
                            <li>Brackets</li>
                            <li>Github</li>
                            <li>The Movie DB API</li>
                            <li><a href="http://www.randyconnolly.com/" target="_blank">Movie JSON Data</a></li>
                        </ul>
                        <div>Images Used: </div>
                        <ul>
                            <li><a href="https://www.flaticon.com/free-icon/video-player-sign_73960" target="_blank" rel="noopener noreferrer">Website Logo</a></li>
                            <li><a href="https://icons8.com/icon/81432/delete" target="_blank" rel="noopener noreferrer">Delete Icon</a></li>
                            <li>Loader Icon: From React Lab 1</li>
                            <li><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Various Other Icons</a></li>
                        </ul>
                        <div>Third Party Code Used: </div>
                        <ul>
                            <li><a href="https://codepen.io/t7team/pen/ZowdRN" target="_blank" rel="noopener noreferrer">Cast/Crew Tabs Design</a></li>
                            <li><a href="https://codepen.io/Laumak/pen/pRJzGL" target="_blank" rel="noopener noreferrer">Modal Design</a></li>
                            <li><a href="https://codepen.io/mtclmn/pen/QyPVJp" target="_blank" rel="noopener noreferrer">Search Sorting Function</a></li>
                            <li><a href="http://stackoverflow.com/questions/16491758/remove-objects-from-array-by-object-property" target="_blank" rel="noopener noreferrer">Removing Object from Array</a></li>
                            <li><a href="https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string" target="_blank" rel="noopener noreferrer">Money format</a></li>
                        </ul>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default About;