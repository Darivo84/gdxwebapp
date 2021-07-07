import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
