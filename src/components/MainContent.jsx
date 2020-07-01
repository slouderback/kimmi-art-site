import React, { Component }  from 'react';

import Paintings from '../paintings.json';
import '../MainContent.css' 

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paintingsData: Paintings.paintings
        }
    }
    render() {
        return (
            <div className="allPaintings">
                {this.state.paintingsData.map((painting, index) => (
                    <div key={index}>
                        <h3>{painting.name}</h3>
                        <img src={painting.src} alt="Failed to load"/>
                        <p>{painting.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default MainContent;
