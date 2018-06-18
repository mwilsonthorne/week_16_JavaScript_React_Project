  import React from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const options = props.planets.map((planet, index) =>{
      return (
        <div key={index}>
          <h2> {planet.name} </h2>
          <img src={require('/one.jpeg')} />
        </div>

      )


    })

      return (
        <div> {options} </div>
        // <PlanetSelector />

      );
  }


  export default PlanetBox;
