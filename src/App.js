import React from 'react';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import SetupEvent from './components/setup/Event';
import AppDesign from './components/setup/AppDesign';
import {Switch, Route} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import store from './store/Store';

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
      <Route exact path="/app-design" component={AppDesign}/>
      {/* <Route component={NoMatch} /> */}
    </Switch>
  );
}

export default App;
