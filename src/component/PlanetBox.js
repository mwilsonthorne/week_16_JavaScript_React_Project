  import React, { Component } from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const options = props.planets.map((planet, index) =>{
      return <option value={index} key={index}>{planet.name}</option>


    })

      return (
        <div>
        <select>
          <option>Choose a planet...</option>
          {options}
        </select>
        <PlanetSelector />
        </div>
      );
  }


  export default PlanetBox;
