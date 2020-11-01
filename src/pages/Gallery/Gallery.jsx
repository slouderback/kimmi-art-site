import React, { Component } from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav/Nav";

import Paintings from "../../paintings.json";
import styles from "./Gallery.module.css";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      paintingsData: Paintings.paintings,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.gallery}>
          <h1 className={styles.header}>Gallery</h1>
          <div className={styles.allPaintings}>
            {this.state.paintingsData.map((painting, index) => (
              <div key={index} className={styles.paintingBlock}>
                <Link to={`/gallery/${painting.name}`}>
                  <img src={painting.src} alt="Failed to load" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
