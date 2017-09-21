import React, { Component, constructor } from 'react';
import { Vehicles } from '../database/vehicles.js';
import { createContainer } from 'meteor/react-meteor-data';
import Edit from './Edit';

export default EditContainer = createContainer((params) => {

  Meteor.subscribe('vehicle', params.id);
  var vehicle = Vehicles.findOne({});

  return {
    vehicle,
  };
}, Edit);
