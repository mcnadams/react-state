import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colorUpdater={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects red', () => {
    const colorUpdater = jest.fn();
    const wrapper = shallow(<ColorPicker colorUpdater={colorUpdater} />);
    wrapper.find('button').at(0).simulate('click');
    expect(colorUpdater).toHaveBeenCalledWith('red');
  });

  it('selects yellow', () => {
    const colorUpdater = jest.fn();
    const wrapper = shallow(<ColorPicker colorUpdater={colorUpdater} />);
    wrapper.find('button').at(1).simulate('click');
    expect(colorUpdater).toHaveBeenCalledWith('yellow');
  });

  it('selects blue', () => {
    const colorUpdater = jest.fn();
    const wrapper = shallow(<ColorPicker colorUpdater={colorUpdater} />);
    wrapper.find('button').at(2).simulate('click');
    expect(colorUpdater).toHaveBeenCalledWith('blue');
  });

});
