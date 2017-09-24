import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Add from '../imports/components/Add.jsx';

describe('Add', () => {
  const add = shallow(<Add />);

  it('Add component renders everything correctly', () => {
    expect(add.find('div').length).toEqual(11);
    expect(add.find('Nav').length).toEqual(1);
    expect(add.find('label').length).toEqual(8);
    expect(add.find('input').length).toEqual(8);
    expect(add.find('button.btn').length).toEqual(1);
    expect(add.find('form').length).toEqual(1);
  });

  it('Every buton in Login component works correctly', () => {
    add.find('button.btn').simulate('click');
  });

  it('Every function that changes state works correctly', () => {
    var object = {target: {value: 'aPlateOfVehicle'}};
    add.instance().updatePlateOfVehicle(object);
    expect(add.state('plateOfVehicle')).toEqual('aPlateOfVehicle');

    object.target.value = 'aNickNameOfVehicle';
    add.instance().updateNickNameOfVehicle(object);
    expect(add.state('nickNameOfVehicle')).toEqual('aNickNameOfVehicle');

    object.target.value = 'aBrandOfVehicle';
    add.instance().updateBrandOfVehicle(object);
    expect(add.state('brandOfVehicle')).toEqual('aBrandOfVehicle');

    object.target.value = 'aModelOfVehicle';
    add.instance().updateModelOfVehicle(object);
    expect(add.state('modelOfVehicle')).toEqual('aModelOfVehicle');

    object.target.value = 'aModelYearOfVehicle';
    add.instance().updateModelYearOfVehicle(object);
    expect(add.state('modelYearOfVehicle')).toEqual('aModelYearOfVehicle');

    object.target.value = 'aTypeOfVehicle';
    add.instance().updateTypeOfVehicle(object);
    expect(add.state('typeOfVehicle')).toEqual('aTypeOfVehicle');

    object.target.value = 'aColorOfVehicle';
    add.instance().updateColorOfVehicle(object);
    expect(add.state('colorOfVehicle')).toEqual('aColorOfVehicle');

    object.target.checked = true;
    add.instance().updateActive(object);
    expect(add.state('active')).toEqual(true);
  });
});
