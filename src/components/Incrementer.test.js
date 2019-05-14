import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('Simple Incrementer', () => {
  it('makes an incrementer button', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

});
