import React, { Component } from 'react';
import PlanetData from './PlanetData.js';

class PlanetSelector extends Component {
  render(){
    return (
      <div className="planet-selector">
      <h1>My Solar System</h1>
        Hello World! I am 2nd bottom of the hierarchy
      <PlanetData />
      </div>
    );
  }
}

export default PlanetSelector;
