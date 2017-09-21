import React, { Component, constructor } from 'react';
import { Vehicles } from '../database/vehicles.js';
import { createContainer } from 'meteor/react-meteor-data';
import Homepage from './Homepage';

export default HomepageContainer = createContainer(() => {

  Meteor.subscribe('vehicles');
  var vehicles = Vehicles.find({}).fetch();

  return {
    vehicles,
  };
}, Homepage);
