import React, { Component } from "react";
import {
      Route,
      NavLink,
      HashRouter,
      Routes
    } from "react-router-dom";
import Home from "./components/home/Home";    
import JourneyDetails from "./components/jouneyDetails/JourneyDetails";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
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