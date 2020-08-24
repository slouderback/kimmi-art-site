import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch, Link,
} from 'react-router-dom';


import Logo from './Logo'
import Gallery from './Gallery';
import About from './About'
import PaintingInfo from './PaintingInfo'

import '../styling/Nav.css' 

class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav style={{ float: 'left', paddingLeft: '3vw', paddingTop: '3vw' }}>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><Logo /></Link>
                            </li>
                            <li>
                                <Link to="/gallery" style={{ textDecoration: 'none', color: '#454241' }}>Gallery</Link>
                            </li>
                            <li>
                                <Link to="/about" style={{ textDecoration: 'none', color: '#454241' }}>About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Redirect from="index.html" to="/" />
                        <Route exact path="/" component={Gallery} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/gallery/:paintingName" component={PaintingInfo} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Nav;