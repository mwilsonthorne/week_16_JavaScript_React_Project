import React, { Component } from 'react';
import PlanetBox from '../component/PlanetBox.js';
import PlanetData from '../component/PlanetData.js';

class SolarSystem extends Component {

  constructor(props){
    super(props);
    this.state = {
      planets: [],
      currentPlanet: null,
      showPlanetBox: true

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

  handlePlanetSelected(planetId){
    const selectedPlanet = this.state.planets[planetId - 1]
    // console.log('index', [index]);
    this.setState ( {currentPlanet: selectedPlanet, showPlanetBox: false} )
    // console.log(planetId);
    // console.log(selectedPlanet);
  }

  render() {
    return (
      <div>
        <h1>Our Solar System</h1>
        { this.state.showPlanetBox ?
          <PlanetBox
            planets={this.state.planets}
            onPlanetSelected={this.handlePlanetSelected}
          />
        :
        <PlanetData planet={this.state.currentPlanet}/>
      }
      </div>
    );
  }
}

export default SolarSystem;
