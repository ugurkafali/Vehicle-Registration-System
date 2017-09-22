/*
  In meteorjs, if a file is not in neither client or server folder, this file belong to both client side and server side. Functions that are
  written in these files can be accessed by both client side and server side.This file is responsible for inserting, editing or deleting data
  in database.First these functions are called by both client side and server side.Client side is for speed mostly.Inserting, editing
   or deleting are done by server side only.
*/

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Vehicles = new Mongo.Collection('vehicles'); // it is table of vehicles.In meteor it is called collections.

Meteor.methods({

  /* When user clicks 'Add' button, this function is called from client side then it runs on both client side and server side.If server side fails,
  it doesn't matter if it runs successfully on client side it will fail, won't store vehicle into database and return an error to client side. */
  addVehicle: function(plateOfVehicle, nickNameOfVehicle, brandOfVehicle, modelOfVehicle, modelYearOfVehicle, typeOfVehicle, colorOfVehicle, active) {
    Vehicles.insert({
      ownerId: Meteor.userId(),
      plateOfVehicle: plateOfVehicle,
      nickNameOfVehicle: nickNameOfVehicle,
      brandOfVehicle: brandOfVehicle,
      modelOfVehicle: modelOfVehicle,
      modelYearOfVehicle: modelYearOfVehicle,
      typeOfVehicle: typeOfVehicle,
      colorOfVehicle: colorOfVehicle,
      active: active
    });
  },

  /* When user clicks 'Update The Vehicle' button, this function is called from client side then it runs on both client side and server side.
  If server side fails, it doesn't matter if it runs successfully on client side it will fail, won't update the vehicle and return an error
  to client side. */
  updateVehicle: function(id, plateOfVehicle, nickNameOfVehicle, brandOfVehicle, modelOfVehicle, modelYearOfVehicle, typeOfVehicle, colorOfVehicle, active) {
    Vehicles.update(id, {
      $set: {
        plateOfVehicle: plateOfVehicle,
        nickNameOfVehicle: nickNameOfVehicle,
        brandOfVehicle: brandOfVehicle,
        modelOfVehicle: modelOfVehicle,
        modelYearOfVehicle: modelYearOfVehicle,
        typeOfVehicle: typeOfVehicle,
        colorOfVehicle: colorOfVehicle,
        active: active
      }
    });
  },

  /* When user clicks 'Delete' button and accepts it, this function is called from client side then it runs on both client side and server side.
  If server side fails, it doesn't matter if it runs successfully on client side it will fail, won't delete the vehicle from database
  and return an error to client side. */
  deleteVehicle: function(id) {
    Vehicles.remove(id);
  }
});

//This code runs only on server side and client side just ignores this.
if (Meteor.isServer) {
  /* Returns all vehicles who inserted them into database.Must call Meteor.subscribe('vehicles') from client side. It doesn't send them to every component
    This function explained wider in imports/components/HomepageContainer.jsx */
  Meteor.publish('vehicles', function() {
    return Vehicles.find({ownerId: this.userId}, {sort: { createdAt: -1 }});
  });

  /* Returns a specific vehicle who inserted it into database.Must call Meteor.subscribe('vehicle') from client side. It doesn't send it to every component
    This function explained wider in imports/components/EditContainer.jsx  */
  Meteor.publish('vehicle', function(id) {
    return Vehicles.find({ $and: [{ _id: id}, {ownerId: this.userId}]});
  });
}
