import React from 'react';


const PlanetData = (props) => {
  if(!props.planet) return null

  function handleReturn(event){
    props.onReturnSelected();
  }

    return (
      <div className="planet-data">
        <h3>Planet Name: {props.planet.name}</h3>
        <h3>Mass: {props.planet.mass} e24kg</h3>
        <h3>Density: {props.planet.density} kg/m^3</h3>
        <h3>Diameter: {props.planet.diameter} km</h3>
        <h3>Orbital Velocity: {props.planet.orbital_velocity} km/sec</h3>
        <h3>Gravity: {props.planet.gravity} metres/sec^2</h3>
        <h3>Day Length: {props.planet.length_of_day} hrs</h3>
        <h3>Year Length: {props.planet.orbital_period} days</h3>
        <h3>Distance from the Sun: {props.planet.distance_from_sun} million km</h3>
        <h3>Temperature: {props.planet.mean_temperature} degrees Celsius</h3>
        <h3>Moons: {props.planet.number_of_moons}</h3>
        <button onClick={handleReturn} type ="submit"> Return to Solar System </button>
      </div>
    );

}

export default PlanetData;
