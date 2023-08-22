import React from 'react';
import ReactDOM from 'react-dom';
import SkillsSection from './SkillsSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillsSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});