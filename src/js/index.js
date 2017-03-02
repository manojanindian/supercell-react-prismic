import React from 'react';
import ReactDOM from 'react-dom';

// ////////////////////////////////////////////////
// hashHistory (hash-based URLs), browserHistory (HTML5 pushState "pretty" URLs).
// To use browserHistory properly server must be configured to use HTML5 Pushstate.
// If problems with browserHistory use hashHistory.
// With Apache server, create .htaccess using this gist:
// https://gist.github.com/joellongie/e6f4a3b5fa98c521782619e487aca15a
// ////////////////////////////////////////////////

import { Router, hashHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={ hashHistory } routes={routes} />,
  document.querySelector('#app')
);
