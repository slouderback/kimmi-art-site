import React, { Component }  from 'react';
import {
    Link,
} from 'react-router-dom';

import Paintings from '../paintings.json';
import '../styling/Gallery.css' 


class Gallery extends Component {
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
                    <div key={index} className="paintingBlock">
                        <Link to={`/gallery/${painting.name}`}><img src={painting.src} alt="Failed to load"/></Link>
                        {/* <img src={painting.src} alt="Failed to load"/> */}
                    </div>
                ))}
            </div>
        );
    }
}

export default Gallery;
