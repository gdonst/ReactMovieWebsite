import React from 'react';
import PropTypes from 'prop-types';
import './SingleMovieImage.css';

//This modal design was created/altered using: https://codepen.io/Laumak/pen/pRJzGL
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

//This component creates a movie image to pop up upon the image being clicked in the movie details view
class SingleMovieImage extends React.Component {
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
        const imgURL = `https://image.tmdb.org/t/p/w185${this.props.movie.poster}`;
        const imgURL2 = `https://image.tmdb.org/t/p/w500${this.props.movie.poster}`;
        return(
            <section className="section">
                <div className="container">
                    <img alt="movie poster" src={imgURL} onClick={this.toggleModal} />
                    <Modal 
                        closeModal={this.toggleModal} 
                        modalState={this.state.modalState} 
                        title={this.props.movie.title}
                        >
                        <div id="pictureIMG">
                            <img alt="movie poster" src={imgURL2} />
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}

export default SingleMovieImage;