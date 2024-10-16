import { Footer } from './Footer';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});