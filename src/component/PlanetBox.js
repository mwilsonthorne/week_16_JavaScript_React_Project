  import React from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const planetInfo = props.planets.map((planet, index) =>{
    const imgId = `../images/${planet.id}.jpeg`
      return (
        <div key={index}>
          <h2> {planet.name} </h2>
          <img src={imgId}/>
        </div>

      )


    })

      return (
        <div> {planetInfo} </div>
        // <PlanetSelector />

      );
  }


  export default PlanetBox;
