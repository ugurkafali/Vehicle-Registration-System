import React, { Component, constructor } from 'react';

import Nav from './Nav.jsx'; // Navigation conponent of this project
import Vehicle from './Vehicle.jsx';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showVehicles = this.showVehicles.bind(this);
  }

  /*
    This function iterates every vehicles that is sent from HomepageContainer component and makes components for every vehicles.
    FlowRouter finds id from this part.This function gives Every Vehicle component their own id.
  */
  showVehicles(){
    let vehicles = this.props.vehicles;

    return vehicles.map((vehicle) => (
      <Vehicle key={vehicle._id} vehicle={vehicle} />
    ));
  }

  render() {
    return(
      <div>
        <Nav />
        {this.showVehicles()}
      </div>
    );
  }
}
