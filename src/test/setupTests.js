// setup file
// https://airbnb.io/enzyme/docs/installation/react-16.html
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/* Achtung !!!!!!!!!*/
/* Enzyme Internal Error: configured enzyme adapter
did not inherit from the EnzymeAdapter base class */

/* import Enzyme from 'Enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
}); */