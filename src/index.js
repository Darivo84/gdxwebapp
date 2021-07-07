import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/gdxwebapp" history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
