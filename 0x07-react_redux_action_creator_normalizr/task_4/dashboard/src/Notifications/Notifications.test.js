import { Notifications } from './Notifications';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
});