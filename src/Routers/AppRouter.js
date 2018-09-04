import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import ReactGA from 'react-ga';
import Dashboard from '../components/Dashboard';
import Series from '../components/Podcasts';
import NewHeader from '../components/NewHeader';
import Episode from '../components/Episode';
import Recommend from '../components/Recommend';




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
        <NewHeader />
        <Route exact={true} path="/" component={Dashboard} />
        <Route exact={true}  path="/mlg" component={Series} />
        <Route path="/mlg/:id" component={Episode} />
        <Route exact={true} path="/recommend" component={Recommend} />


        </div>

    </Switch>
  </Router>


);

// <Route component={NotFoundPage} />

export default AppRouter;
