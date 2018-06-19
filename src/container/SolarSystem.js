import React, { Component } from 'react';
import PlanetBox from '../component/PlanetBox.js';

class SolarSystem extends Component {

  constructor(props){
    super(props);
    this.state = {
      planets: [],
      currentPlanet: null

    }

    this.handlePlanetSelected = this.handlePlanetSelected.bind(this);

  }

  componentDidMount(){
   const url = 'https://dry-plains-91502.herokuapp.com/planets';
   fetch(url)
     .then(res => res.json())
     .then(planetsData => this.setState({planets: planetsData}))
     .catch(error => console.log("Error:", error))
 }

handlePlanetSelected(index){
  const selectedPlanet = this.state.planets[index]
  this.setState ( {currentPlanet: selectedPlanet} )
  console.log("Button Clicked");
}

  render() {
    return (
      <div>
        <h1>Our Solar System</h1>
        <PlanetBox
          planets={this.state.planets}
          onPlanetSelected={this.handlePlanetSelected}
        />
        </div>
    );
  }
}

export default SolarSystem;
