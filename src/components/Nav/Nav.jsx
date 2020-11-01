import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Logo from "../Logo";
import Home from "../../pages/Home/Home";
import Gallery from "../../pages/Gallery/Gallery";
import About from "../../pages/About/About";
import PaintingInfo from "../../pages/PaintingInfo/PaintingInfo";

import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* <ul style={{ listStyleType: 'none' }}> */}
          <ul className={styles.navList}>
            <li className={styles.listItemLogo}>
              <Link to="/" className={styles.listItemLogo}>
                <Logo />
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/gallery" className={styles.linkItem}>
                <p>Gallery</p>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/about" className={styles.linkItem}>
                <p>About</p>
              </Link>
            </li>
            <li className={styles.listItem}>
              <a
                href={"mailto:kimmirisk@gmail.com"}
                className={styles.linkItem}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
