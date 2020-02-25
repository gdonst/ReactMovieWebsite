import React from "react";
import { Link } from 'react-router-dom';

//This component creates a single cast member for the parent table compontent
class SingleCast extends React.Component {
    handleViewClick = () => {
        this.props.showCastDetails(this.props.cast);
    }

    render() {
        return (
            <tr>
                <td>{this.props.cast.character}</td>
                <td>{this.props.cast.name}</td>
                <td>
                    <Link to='/details/cast'>
                        <button className="button is-dark" onClick={ this.handleViewClick }>View</button>
                    </Link>
                </td>
            </tr>
        );
    }
}

export default SingleCast