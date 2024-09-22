import { Login } from './Login';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
});