import React, { Component } from 'react';
import PlanetBox from '../component/PlanetBox.js';

class SolarSystem extends Component {

  constructor(props){
    super(props);
    this.state = {
      planets: [],
      currentPlanet: null

    }

  }

  componentDidMount(){
   const url = 'https://dry-plains-91502.herokuapp.com/planets';
   fetch(url)
     .then(res => res.json())
     .then(planetsData => this.setState({planets: planetsData}))
     .catch(error => console.log("Error:", error))
 }



  render() {
    return (
      <div>
        <h1>Our Solar System</h1>
        <PlanetBox
          planets={this.state.planets}/>
        </div>
    );
  }
}

export default SolarSystem;
