import React from "react";

//This component creates a single crew member for the parent table component
class SingleCrew extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.crew.department}</td>
                <td>{this.props.crew.job}</td>
                <td>{this.props.crew.name}</td>
            </tr>
        );
    }
}

export default SingleCrew