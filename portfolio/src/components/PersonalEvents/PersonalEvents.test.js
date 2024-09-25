import React from 'react';
import ReactDOM from 'react-dom';
import PersonalEvents from './PersonalEvents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalEvents />, div);
  ReactDOM.unmountComponentAtNode(div);
});