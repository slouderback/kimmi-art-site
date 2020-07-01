import React, { Component }  from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
