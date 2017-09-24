import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Login from '../imports/components/Login.jsx';

describe('Login', () => {
  const login = mount(<Login />);

  it('Login component renders everything correctly', () => {
    expect(login.find('div').length).toEqual(9);
    expect(login.find('h3').length).toEqual(1);
    expect(login.find('label').length).toEqual(2);
    expect(login.find('div.col-md-4').length).toEqual(6);
    expect(login.find('input').length).toEqual(2);
    expect(login.find('button.btn').length).toEqual(1);
  });

  it('Every buton in Login component works correctly', () => {
    login.find('button.btn').simulate('click');
  });

  it('Every function that changes state works correctly', () => {
    var object = {target: {value: 'aUsername'}};
    login.instance().updateUsername(object);
    expect(login.state('username')).toEqual('aUsername');
    
    object.target.value = 'aPassword';
    login.instance().updatePassword(object);
    expect(login.state('password')).toEqual('aPassword');
  });
});
