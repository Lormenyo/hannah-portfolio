import React from 'react';
import ReactDOM from 'react-dom';
import AppProject from './appProject';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppProject />, div);
  ReactDOM.unmountComponentAtNode(div);
});