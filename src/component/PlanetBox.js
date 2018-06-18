  import React from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const options = props.planets.map((planet, index) =>{
      return <div key={index}> {planet.name} </div>

    })

      return (
        <div>
          {options}
        <PlanetSelector />
        </div>
      );
  }


  export default PlanetBox;
