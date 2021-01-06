import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App/>)
const findByTestAttr = (wrapper, val)=>wrapper.find(`[data-test='${val}']`)

test('render without error', () => {
const wrapper = setup()
const appComponent = findByTestAttr(wrapper,"component-app")
expect(appComponent.length).toBe(1)
})

test('render button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper,"increment-button")
    expect(button.length).toBe(1)
})

test('render counter display', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttr(wrapper,"counter-display")
    expect(counterDisplay.length).toBe(1)
})

test('counter start at 0', ()=>{
  const wrapper = setup()
  const count = findByTestAttr(wrapper,"count").text()
  expect(count).toBe("0")
})

test('clicking on button increment counter display', ()=>{
    const wrapper = setup()
    const button = findByTestAttr(wrapper,"increment-button")
    //find the button 
    button.simulate('click');
    // click the button 
    const count = findByTestAttr(wrapper,"count").text()
    expect(count).toBe("1");
    // find the display and test that number have been incremented  

})
