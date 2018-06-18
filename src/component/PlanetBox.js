  import React from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const planetInfo = props.planets.map((planet, index) =>{
      const imgID =  `/images/${planet.id}.jpg`
      return (
        <div key={index}>
          <h2> {planet.name} </h2>
          <img src={window.location.origin + imgID} alt={planet.name}/>
        </div>

      )


    })

      return (
        <div> {planetInfo} </div>
        // <PlanetSelector />

      );
  }


  export default PlanetBox;
