import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display', () => {

  it('makes a ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay color='red' />);
    expect(wrapper).toMatchSnapshot();
  });
});
