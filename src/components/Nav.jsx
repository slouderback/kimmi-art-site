import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch, Link,
} from 'react-router-dom';


import MainContent from './MainContent';
import About from './About'

class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Redirect from="index.html" to="/" />
                        <Route exact path="/" component={MainContent} />
                        <Route exact path="/about" component={About} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Nav;