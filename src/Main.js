import React, { Component } from "react";
import {
      Route,
      NavLink,
      HashRouter,
      Routes
    } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";    
import JourneyDetails from "./components/jouneyDetails/JourneyDetails";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <Header />
          {/* <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/journey_details">JourneyDetails</NavLink></li>
          </ul> */}
          <Home />
          <div className="content">
             <Routes exact path="/" component={Home} />
             <Routes exact path="/journey_details" component={JourneyDetails} />
          </div>
        </div>
         </HashRouter>
    );
  }
}
 
export default Main;