import React, { Component } from 'react';

import Paintings from '../../paintings.json';

import styles from './PaintingInfo.module.css';

class PaintingInfo extends Component {
    constructor() {
        super()
        this.state = {
            paintingsData: Paintings.paintings
        }
    }
    render() {
        var i
        var paintingInfo
        for (i in this.state.paintingsData) {
            if (this.state.paintingsData[i].name === this.props.match.params.paintingName) {
                paintingInfo = this.state.paintingsData[i]
            }
        }
        return (
            <div className={styles.paintingInfo}>
                <div className={styles.title}>{paintingInfo.name}</div>
                <div className={styles.paintingAndPrice}>
                    <img src={paintingInfo.src} alt="Not found"></img>
                    <div className={styles.infoPanel}>
                        <div className="price">Price: $3000.00</div>
                        <div className="size">Size: 48 x 30"</div>
                        <div className="year">Year: 2018</div>
                    </div>
                </div>
                <div className={styles.description}>{paintingInfo.description}</div>
            </div>
        );
    }
}

export default PaintingInfo;
