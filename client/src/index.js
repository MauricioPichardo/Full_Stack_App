import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/global.css';

import './static/css/poppins-font.css';

import './static/css/main.css';

import { Provider } from './Context';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
