import React from 'react';
import ReactDOM from 'react-dom';
import Modes from './Modes';

describe('Modes', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Modes />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  })