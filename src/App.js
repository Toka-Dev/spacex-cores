import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import CoreList from './components/CoreList';
import CoreDetails from './components/CoreDetails';
import Home from './components/Home';
import StatisticalData from './components/StatisticalData';
import Footer from './components/Footer';

/**
 * Root component of the application
 * @returns the navigation, footer and route-dependent content 
 */
export default function App() {
  return (
    <Router>
      <nav className="ui inverted menu">
        <NavLink to="/home" className="item" activeClassName="active"><i className="home icon" />Home</NavLink>
        <NavLink to="/cores" className="item" activeClassName="active">Cores</NavLink>
        <NavLink to="/statistic" className="item" activeClassName="active">Statistic</NavLink>
      </nav>
      <Switch>
        <Route path="/cores/:id">
          <CoreDetails />
        </Route>
        <Route path="/cores">
          <CoreList />
        </Route>
        <Route path="/statistic">
          <StatisticalData />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="">
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}