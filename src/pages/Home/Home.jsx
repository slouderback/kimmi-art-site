import React, { Component } from "react";
import { Link } from "react-router-dom";

import image from "../../backgroundImages/Slow_My_Roll_2_detail-2.jpg";

import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.textContainer}>
          <div className={styles.header}>
            Kimmi Risk's <br /> Art Gallery
          </div>
          <Link to="/gallery">
            <button className={styles.galleryButton}>Enter Gallery</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
