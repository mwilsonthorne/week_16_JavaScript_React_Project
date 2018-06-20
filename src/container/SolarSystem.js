import React, { Component } from 'react';
import PlanetBox from '../component/PlanetBox.js';
import PlanetData from '../component/PlanetData.js';
import PlanetURL from '../component/PlanetURL.js';

class SolarSystem extends Component {

  constructor(props){
    super(props);
    this.state = {
      planets: [],
      planetURL: PlanetURL,
      currentPlanet: null,
      showPlanetBox: true

    }

    this.handlePlanetSelected = this.handlePlanetSelected.bind(this);
    this.handleReturnSelected = this.handleReturnSelected.bind(this);

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
    this.setState ( {currentPlanet: selectedPlanet, showPlanetBox: false} )
  }

  handleReturnSelected(){
    this.setState ( {showPlanetBox: true} )
  }

  render() {
    let pageBody;
    if(this.state.showPlanetBox){
      pageBody =   <PlanetBox
      planets={this.state.planets}
      onPlanetSelected={this.handlePlanetSelected}
      />
    }else{
      pageBody = <PlanetData
      planet={this.state.currentPlanet}
      planetURL= {this.state.planetURL[this.state.currentPlanet.id - 1]}
      onReturnSelected={this.handleReturnSelected}
      />
    }

    return (
      <div className="title">
      <h1>Our Solar System</h1>
      {pageBody}
      </div>
    );
  }
}

export default SolarSystem;
