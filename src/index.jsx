import React from 'react';
import ReactDOM from 'react-dom';

import CardComponent from './CardComponent/CardComponent';

console.log('hola');

ReactDOM.render(
  <div>
    <CardComponent />
    <h1>hola mundo!</h1>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
