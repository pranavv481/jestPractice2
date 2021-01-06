import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('render without error', () => {
const wrapper = shallow(<App/>);
const appComponent = wrapper.find("[data-test='component-app']")
expect(appComponent.length).toBe(1)
})

test('render button', () => {

})

test('render counter display', () => {

})

test('counter start at 0', ()=>{

})

test('clicking on button increment counter display', ()=>{

})
