import React from 'react';
import ReactDOM from 'react-dom';
import Rules from './Rules';

describe('Rules', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Rules />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  })