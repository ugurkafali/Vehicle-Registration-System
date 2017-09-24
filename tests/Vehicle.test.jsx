import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Vehicle from '../imports/components/Vehicle.jsx';

describe('vehicle', () => {
  var aVehicle = {};
  aVehicle._id = "xr5d9FqzkaGsQgk83";
  aVehicle.plateOfVehicle = "35plate";
  aVehicle.nickNameOfVehicle = "nick";
  aVehicle.brandOfVehicle = "brand";
  aVehicle.modelOfVehicle = "model";
  aVehicle.modelYearOfVehicle = "year";
  aVehicle.typeOfVehicle = "type";
  aVehicle.colorOfVehicle = "#000000";
  aVehicle.active = true;
  const vehicle = mount(<Vehicle vehicle={aVehicle} />);

  it('vehicle component renders everything correctly', () => {
    expect(vehicle.find('div').length).toEqual(22);
    expect(vehicle.find('h2').length).toEqual(1);
    expect(vehicle.find('input').length).toEqual(2);
    expect(vehicle.find('button.btn').length).toEqual(2);
  });

  it('vehicle component gets props correctly', () => {
    expect(vehicle.props().vehicle._id).toEqual('xr5d9FqzkaGsQgk83');
    expect(vehicle.props().vehicle.plateOfVehicle).toEqual('35plate');
    expect(vehicle.props().vehicle.nickNameOfVehicle).toEqual('nick');
    expect(vehicle.props().vehicle.brandOfVehicle).toEqual('brand');
    expect(vehicle.props().vehicle.modelOfVehicle).toEqual('model');
    expect(vehicle.props().vehicle.modelYearOfVehicle).toEqual('year');
    expect(vehicle.props().vehicle.typeOfVehicle).toEqual('type');
    expect(vehicle.props().vehicle.colorOfVehicle).toEqual('#000000');
    expect(vehicle.props().vehicle.active).toEqual(true);
  });
});
