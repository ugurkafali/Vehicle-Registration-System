import React, { Component, constructor } from 'react';

import Nav from './Nav.jsx';
import Vehicle from './Vehicle.jsx';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showVehicles = this.showVehicles.bind(this);
  }

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
