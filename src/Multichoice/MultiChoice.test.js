import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';

const sample = [
  {question: "test1",
  correct_answer: "test1",
  possible_answers: ['test1', 'test1', 'test1', 'test1']}
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice answers = {sample[0].possible_answers}/>, div);
});
