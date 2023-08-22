import React from 'react';
import ReactDOM from 'react-dom';
import ContactSection from './ContactSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});