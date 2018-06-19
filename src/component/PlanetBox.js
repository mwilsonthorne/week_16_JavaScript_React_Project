  import React from 'react';
  import PlanetSelector from './PlanetSelector.js';

  const PlanetBox = (props) => {


    const planetInfo = props.planets.map((planet, index) =>{
      const imgID =  `/images/${planet.id}.jpg`


      function handleChange(event){
        props.onPlanetSelected(event.target.value);
      }

      return (
        <div key={index} onClick={handleChange}>
          <h2> {planet.name} </h2>
          <img src={window.location.origin + imgID} alt={planet.name}/>
        </div>
)

})
      return (
        <div>
          {planetInfo}
        </div>
        // <PlanetSelector />

      );
  }
  export default PlanetBox;
