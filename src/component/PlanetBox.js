import React from 'react';

const PlanetBox = (props) => {


  const planetInfo = props.planets.map((planet, index) =>{
    const imgID =  `/images/${planet.id}.jpg`

    function handleChange(event){
      props.onPlanetSelected(event.currentTarget.getAttribute('value'));
    }

    return (
      <div key={index} value={planet.id} onClick={handleChange} className="planet">
        <h2> {planet.name} </h2>
        <img src={window.location.origin + imgID} alt={planet.name} className="planetImage"/>
      </div>
    )

  })

  return (
    <div>
      {planetInfo}
    </div>
  );
}
  export default PlanetBox;
