import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor', () => {
  it('let\'s just pass Travis please', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
