import React from 'react';
import ReactDOM from 'react-dom';
import IntroSection from './IntroSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntroSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});