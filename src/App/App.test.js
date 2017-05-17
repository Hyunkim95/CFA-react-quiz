import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('reset() resets quiz state', () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();

  component.instance().state = {
    progress: 2,
    selected: 'Yowzer',
    score: 4
  };

  component.instance().reset();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'Not yet!',
    score: 0
  })
})
