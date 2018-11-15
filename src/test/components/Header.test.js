import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';



test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

  
// test if there are one or more h1

// access to enzyme core api
// const wrapper = shallow(<Header />);

// expect(wrapper.find('h1').length).toBe(1);
// expect (wrapper.find('h1').text()).toBe('Header Expensify');