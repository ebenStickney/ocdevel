import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import ReactGA from 'react-ga';

import App from './components/App';
import Home from './components/home/Index';
import Podcasts from './components/Podcasts';


const history = createHistory();

// // redirect from old routes
// let match = window.location.href.match(/machine[\-]?learning(\/.*)?/);
// if (match) {
//   window.location.href = match[1] ? `/mlg${match[1]}` : '/mlg';
// }
//
// const PROD = !~window.location.href.indexOf('localhost');
// PROD && ReactGA.initialize('UA-3128634-8');
// function logPageView() {
//   if (!PROD) return;
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// }

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/mlg" component={Podcasts.Series} />
    </Switch>
  </Router>


)
