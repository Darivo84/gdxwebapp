import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={process.env.PUBLIC_URL + '/welcome'} component={Welcome} />
      </Switch>
    </HashRouter>
  );
}

export default App;
