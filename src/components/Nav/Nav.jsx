import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Logo from "../Logo";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import PaintingInfo from "../PaintingInfo/PaintingInfo";

import styles from './Nav.module.css';

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <nav>
            {/* <ul style={{ listStyleType: 'none' }}> */}
            <ul className={styles.navList}>
              <li>
                <Link to="/" className={styles.linkItem}>
                  <Logo />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.linkItem}>
                  <p>Gallery</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.linkItem}>
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <Switch>
              <Redirect from="index.html" to="/" />
              <Route exact path="/" component={Gallery} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/gallery/:paintingName"
                component={PaintingInfo}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;
