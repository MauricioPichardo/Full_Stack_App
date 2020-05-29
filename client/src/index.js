import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/global.css';
import './static/css/index.css';

import { Provider } from './Context';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));
