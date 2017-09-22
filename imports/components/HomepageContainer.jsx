import React, { Component, constructor } from 'react';
import { Vehicles } from '../database/vehicles.js'; // imports vehicle collection so that the vehicle's data can be accessed from here.

// This ensures the page is reactive. When the vehicle's data is changed this will rerender the page accordingly.
import { createContainer } from 'meteor/react-meteor-data';

import Homepage from './Homepage';

export default HomepageContainer = createContainer(() => {

  /*
    When this code runs the client side gets all vehicles that publication named vehicles gives us.Which in this case vehicles that created
     by user who logged in.
   */
  Meteor.subscribe('vehicles');
  /* All vehicles that are given to us are cursor type.We need array type because react-meteor-data only accepts array. */
  var vehicles = Vehicles.find({}).fetch();

  /* This component is just a container so this component sends vehicles to Homepage component and renders it.
  Also, this component ensures that Homepage component is reactive. */
  return {
    vehicles,
  };
}, Homepage);
