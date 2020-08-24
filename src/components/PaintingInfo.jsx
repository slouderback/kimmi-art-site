import React, { Component }  from 'react';

import Paintings from '../paintings.json';


class PaintingInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paintingsData: Paintings.paintings
        }
    }
    render() {
        return (
            <div className="paintingInfo">
                {this.props.match.params.paintingName}
            </div>
        );
    }
}

export default PaintingInfo;
