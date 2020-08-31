import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'; //not relevant to our project yet
import Students from './students'
import Routes from './Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './Components';

class QCC_Shopper extends Component {

  //don't think we need this yet since we don't need state atm
  constructor() {
    super();
  };

  render() {
    return(
      <Router>
        <Navbar />
        <Routes />
      </Router>
    );
  }
};

export default QCC_Shopper