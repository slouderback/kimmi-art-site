import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Logo from "../components/Logo";
import Home from "../pages/Home/Home"
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import PaintingInfo from "../pages/PaintingInfo/PaintingInfo";

import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <Router>
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
                <a href={"mailto:kimmirisk@gmail.com"} className={styles.linkItem}>Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <Switch>
              <Redirect from="index.html" to="/" />
              <Route exact path="/" component={Home} />
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
