import React from 'react';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import SetupEvent from './components/setup/Event';
import EventList from './components/setup/EventList';
import AppDesign from './components/setup/AppDesign';
import Program from './components/contents/Program';
import ProgramList from './components/contents/ProgramList';
import Resources from './components/contents/Resources';
import Activities from './components/contents/activity/Activities';
import ActivityList from './components/contents/activity/ActivityList';
import UserProfile from './components/UserProfile';
import {Switch, Route} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import store from './store/Store';
import { clearCurrentProfile } from './actions/profileActions';

// check for token
if (localStorage.jwtToken) {
  // set auth token header
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
    // set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // clear current user
    store.dispatch(clearCurrentProfile());
    // redirect to login
    window.location.href = '/login';
  }

}


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/events-info" component={SetupEvent}/>
      <Route exact path="/events-list" component={EventList}/>
      <Route exact path="/app-design" component={AppDesign}/>
      <Route exact path="/profile" component={UserProfile}/>
      <Route exact path="/program" component={Program}/>
      <Route exact path="/program-list" component={ProgramList}/>
      <Route exact path="/resource" component={Resources}/>
      <Route exact path="/activities" component={Activities}/>
      <Route exact path="/activities-list" component={ActivityList}/>
      {/* <Route component={NoMatch} /> */}
    </Switch>
  );
}

export default App;
