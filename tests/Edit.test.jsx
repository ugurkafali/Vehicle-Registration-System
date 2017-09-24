import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Edit from '../imports/components/edit.jsx';

describe('edit', () => {
  var aVehicle = {vehicle: {}};
  aVehicle._id = "xr5d9FqzkaGsQgk83";
  aVehicle.plateOfVehicle = "35plate";
  aVehicle.nickNameOfVehicle = "nick";
  aVehicle.brandOfVehicle = "brand";
  aVehicle.modelOfVehicle = "model";
  aVehicle.modelYearOfVehicle = "year";
  aVehicle.typeOfVehicle = "type";
  aVehicle.colorOfVehicle = "#000000";
  aVehicle.active = true;
  const edit = shallow(<Edit vehicle = {aVehicle} />);

  it('edit component renders everything correctly', () => {
    expect(edit.find('div').length).toEqual(11);
    expect(edit.find('Nav').length).toEqual(1);
    expect(edit.find('label').length).toEqual(8);
    expect(edit.find('form').length).toEqual(1);
    expect(edit.find('input').length).toEqual(8);
    expect(edit.find('button.btn').length).toEqual(1);
  });

  it('Every buton in edit component works correctly', () => {
    edit.find('button.btn').simulate('click');
  });

  it('constructor sets every state correctly', () => {
    expect(edit.state('id')).toEqual('xr5d9FqzkaGsQgk83');
    expect(edit.state('plateOfVehicle')).toEqual('35plate');
    expect(edit.state('nickNameOfVehicle')).toEqual('nick');
    expect(edit.state('brandOfVehicle')).toEqual('brand');
    expect(edit.state('modelOfVehicle')).toEqual('model');
    expect(edit.state('modelYearOfVehicle')).toEqual('year');
    expect(edit.state('typeOfVehicle')).toEqual('type');
    expect(edit.state('colorOfVehicle')).toEqual('#000000');
    expect(edit.state('active')).toEqual(true);
  });

  it('Every function that changes state works correctly', () => {
    var object = {target: {value: 'aPlateOfVehicle'}};
    edit.instance().updatePlateOfVehicle(object);
    expect(edit.state('plateOfVehicle')).toEqual('aPlateOfVehicle');

    object.target.value = 'aNickNameOfVehicle';
    edit.instance().updateNickNameOfVehicle(object);
    expect(edit.state('nickNameOfVehicle')).toEqual('aNickNameOfVehicle');

    object.target.value = 'aBrandOfVehicle';
    edit.instance().updateBrandOfVehicle(object);
    expect(edit.state('brandOfVehicle')).toEqual('aBrandOfVehicle');

    object.target.value = 'aModelOfVehicle';
    edit.instance().updateModelOfVehicle(object);
    expect(edit.state('modelOfVehicle')).toEqual('aModelOfVehicle');

    object.target.value = 'aModelYearOfVehicle';
    edit.instance().updateModelYearOfVehicle(object);
    expect(edit.state('modelYearOfVehicle')).toEqual('aModelYearOfVehicle');

    object.target.value = 'aTypeOfVehicle';
    edit.instance().updateTypeOfVehicle(object);
    expect(edit.state('typeOfVehicle')).toEqual('aTypeOfVehicle');

    object.target.value = 'aColorOfVehicle';
    edit.instance().updateColorOfVehicle(object);
    expect(edit.state('colorOfVehicle')).toEqual('aColorOfVehicle');

    object.target.checked = false;
    edit.instance().updateActive(object);
    expect(edit.state('active')).toEqual(false);
  });

  it('componentWillReceiveProps works correctly', () => {
    aVehicle.vehicle._id = "1";
    aVehicle.vehicle.plateOfVehicle = "2"
    aVehicle.vehicle.nickNameOfVehicle = "3";
    aVehicle.vehicle.brandOfVehicle = "4";
    aVehicle.vehicle.modelOfVehicle = "5";
    aVehicle.vehicle.modelYearOfVehicle = "6";
    aVehicle.vehicle.typeOfVehicle = "7";
    aVehicle.vehicle.colorOfVehicle = "8";
    aVehicle.vehicle.active = false;

    edit.instance().componentWillReceiveProps(aVehicle);

    expect(edit.state('id')).toEqual('1');
    expect(edit.state('plateOfVehicle')).toEqual('2');
    expect(edit.state('nickNameOfVehicle')).toEqual('3');
    expect(edit.state('brandOfVehicle')).toEqual('4');
    expect(edit.state('modelOfVehicle')).toEqual('5');
    expect(edit.state('modelYearOfVehicle')).toEqual('6');
    expect(edit.state('typeOfVehicle')).toEqual('7');
    expect(edit.state('colorOfVehicle')).toEqual('8');
    expect(edit.state('active')).toEqual(false);
  });
});
