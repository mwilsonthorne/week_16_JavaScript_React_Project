import React from 'react';


const PlanetData = (props) => {
  if(!props.planet) return null





    return (
      <div className="planet-data">
        <h3>{props.planet.name}</h3>
        <h3>{props.planet.gravity}</h3>
      </div>
    );

}

export default PlanetData;
