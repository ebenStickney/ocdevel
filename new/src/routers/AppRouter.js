import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from "../components/Dashboard";
import NotFoundPage from "../components/NotFound";
import Header from '../components/Header';
import TestPage from '../components/Podcasts';


export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
 <div>
  <Header />
  <Switch>

    <Route
    path="/"
    component={DashboardPage}
    exact={true}
   />
   <Route
   path="/mlg"
   component={TestPage}
   exact={true}
  />
   <Route
    component={NotFoundPage}
   />
  </Switch>
 </div>

</Router>

);




export default AppRouter;
