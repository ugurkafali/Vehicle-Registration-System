import React, { Component, constructor } from 'react';
import { Vehicles } from '../database/vehicles.js'; // imports vehicle collection so that the vehicle's data can be accessed from here.

// This ensures the page is reactive. When the vehicle's data is changed this will rerender the page accordingly.
import { createContainer } from 'meteor/react-meteor-data';

import Edit from './Edit';

// params comes from FlowRouter's route called vehicleEdit.Parameters can be accessed from params.
export default EditContainer = createContainer((params) => {

  /*
    When this code runs the client gets all vehicles that publication named vehicle gives us.Which in this case just a vehicle that his id is params.id.
    We need just one specific vehicle because user needs to update just one vehicle. We don't want to send whole database
    because it will slow down whole application.This id comes from FlowRouter's route called vehicleEdit.It gets this id from that specific vehicle's
    component.Every vehicle has its own generated component.This explained wider in Homepage.jsx and vehicle.jsx components.
   */
  Meteor.subscribe('vehicle', params.id);
  var vehicle = Vehicles.findOne({}); //This component already gets one vehicle so it takes this vehicle and turns it into array.

  /* This component is just a container so this component sends vehicle to edit component and renders it.
  Also, this component ensures that Edit component is reactive. */
  return {
    vehicle,
  };
}, Edit);
