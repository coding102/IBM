import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Support from './Support';
import './index.css';

// using an ES6 transpiler, like babel
import { Router, Route, Link, browserHistory } from 'react-router';



// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      
    </Route>
  </Router>
), document.getElementById('root'))


