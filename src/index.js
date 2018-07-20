import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, Redirect, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import App from './components/App';
import Home from './components/home/Index';
import Podcasts from './components/Podcasts';

// redirect from old routes
let match = window.location.href.match(/machine[\-]?learning(\/.*)?/);
if (match) {
  window.location.href = match[1] ? `/mlg${match[1]}` : '/mlg';
}

const PROD = !~window.location.href.indexOf('localhost');
PROD && ReactGA.initialize('UA-3128634-8');
function logPageView() {
  if (!PROD) return;
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const history = createHistory();

ReactDom.render(
  <Router history={history} onUpdate={logPageView}>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/mlg" component={Podcasts.Series}>
          <Route path="recommend" component={Podcasts.Recommend} />
          <Route path=":id" component={Podcasts.Episode} />
          <IndexRoute component={Podcasts.Episodes} />
        </Route>
        <IndexRoute component={Home} />
        <Redirect from="*" to="/mlg"/>

    </Switch>
  </Router>
, document.getElementById('root'));
