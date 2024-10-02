import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow'; // Adjust the path if necessary

describe('CourseListRow component', () => {
  
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
    const thElement = wrapper.find('th');
    
    expect(thElement.length).toBe(1); // Check if only one th is rendered
    expect(thElement.prop('colSpan')).toBe('2'); // Check for colspan = 2
    expect(thElement.text()).toBe('Header 1'); // Check if textFirstCell is rendered
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const thElements = wrapper.find('th');

    expect(thElements.length).toBe(2); // Check if two th elements are rendered
    expect(thElements.at(0).text()).toBe('Header 1'); // Check if the first cell contains textFirstCell
    expect(thElements.at(1).text()).toBe('Header 2'); // Check if the second cell contains textSecondCell
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
    const tdElements = wrapper.find('td');

    expect(tdElements.length).toBe(2); // Check if two td elements are rendered
    expect(tdElements.at(0).text()).toBe('Row 1'); // Check if the first cell contains textFirstCell
    expect(tdElements.at(1).text()).toBe('Row 2'); // Check if the second cell contains textSecondCell
  });
});
