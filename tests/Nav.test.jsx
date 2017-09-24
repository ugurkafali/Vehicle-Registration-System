import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Nav from '../imports/components/Nav.jsx';

describe('nav', () => {
  const nav = mount(<Nav />);

  it('nav component renders everything correctly', () => {
    expect(nav.find('div').length).toEqual(4);
    expect(nav.find('nav').length).toEqual(1);
    expect(nav.find('a').length).toEqual(4);
    expect(nav.find('ul').length).toEqual(2);
    expect(nav.find('li').length).toEqual(3);
  });
});
