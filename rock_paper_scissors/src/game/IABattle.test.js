import React from 'react';
import ReactDOM from 'react-dom';
import IABattle from './IABattle';

describe('IABattle', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IABattle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})