import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import ReactGA from 'react-ga';

import App from '../components/App';
import Series from '../components/Podcasts';
import Header from '../components/Header';
import Episode from '../components/Episode';
import Recommend from '../components/Recommend';
import NotFoundPage from '../components/NotFoundPage';



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
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/mlg" component={Series} />
        <Route path="/mlg/:id" component={Episode} />
        <Route exact path="/recommend" component={Recommend} />

      </div>

    </Switch>
  </Router>


);

// <Route component={NotFoundPage} />

export default AppRouter;
