import React from 'react';
import ReactDOM from 'react-dom';
import Area from './Area';

describe('Area', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Area />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  })