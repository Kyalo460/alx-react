import { Header } from './Header'
import React from 'react'
import { shallow } from 'enzyme'

jest.mock('../assets/holberton_logo.jpg', () => 'mocked_logo.jpg');
jest.mock('./Header.css', () => ({}));

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
