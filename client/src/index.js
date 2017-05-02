import React from 'react';
import {render} from 'react-dom';
import Test from './component/test';

const frameworks = ['React', 'Preact', 'Vue', 'Angular', 'Ember'];
const mountNode = document.getElementById('root');

// HMR
if (module.hot) {
  module.hot.accept();
}

const text = [...frameworks, 'something new'].join(', ');
const App = () => (<div>{text}<br /><Test /></div>);

render(<App />, mountNode);
