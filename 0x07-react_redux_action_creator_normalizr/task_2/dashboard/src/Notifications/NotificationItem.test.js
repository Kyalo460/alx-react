import { NotificationItem } from "./NotificationItem";
import { shallow } from "enzyme";
import React from 'react'


describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true)
  });

  it('should render with correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.find('span').at(0).text()).toBe('test');
  });

  it('should render correct HTML content with html prop', ()=> {
    const wrapper = shallow(<NotificationItem html="<u>test</u>"/>);
    expect(wrapper.find('span').at(1).props().dangerouslySetInnerHTML).toEqual({ __html: '<u>test</u>' });
  })
})