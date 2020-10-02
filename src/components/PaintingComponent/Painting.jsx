import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Painting.module.css";

class Painting extends Component {
  render() {
    const { painting } = this.props;
    return (
      <div className={styles.painting}>
        <Link to={`/gallery/${painting.name}`}>
          <img src={painting.src} alt="Failed to load" />
        </Link>
      </div>
    );
  }
}

export default Painting;
