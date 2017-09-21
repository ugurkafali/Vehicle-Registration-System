import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Vehicles = new Mongo.Collection('vehicles');

Meteor.methods({
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

  deleteVehicle: function(id) {
    Vehicles.remove(id);
  }
});

if (Meteor.isServer) {
  Meteor.publish('vehicles', function() {
    return Vehicles.find({ownerId: this.userId}, {sort: { createdAt: -1 }});
  });

  Meteor.publish('vehicle', function(id) {
    return Vehicles.find({ $and: [{ _id: id}, {ownerId: this.userId}]}); 
  });
}
