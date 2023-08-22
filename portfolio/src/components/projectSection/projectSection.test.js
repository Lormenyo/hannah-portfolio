import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSection from './ProjectSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});