import React from 'react';
import ReactDOM from 'react-dom';
import SheldonGame from './SheldonGame';

describe('SheldonGame', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SheldonGame />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
  })