import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="container">
          <div className="app-content">
            <Portfolio />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
