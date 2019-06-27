import React from 'react';
import ReactDOM from 'react-dom';
import AreaIA from './AreaIA';

describe('AreaIA', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AreaIA />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  })