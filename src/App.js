import React from 'react';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import SetupEvent from './components/setup/Event';
import EventList from './components/setup/EventList';
import EventEdit from './components/setup/EventEdit';
import AddParticipant from './components/setup/AddParticipant';
import AppDesign from './components/setup/AppDesign';
import AppDesignList from './components/setup/AppDesignList';
import Program from './components/contents/Program';
import ProgramList from './components/contents/ProgramList';
import ProgramEdit from './components/contents/ProgramEdit';
import Resources from './components/contents/Resources';
import ResourcesList from './components/contents/ResourcesList';
import ResourceEdit from './components/contents/ResourceEdit';
import Activities from './components/contents/activity/Activities';
import ActivityList from './components/contents/activity/ActivityList';
import companyProfile from './components/settings/Profile';
import companyProfileList from './components/settings/CompanyProfiles';
import AddOrganizer from './components/settings/AddOrganizers';
import companyEdit from './components/settings/CompanyEdit';
import UserProfile from './components/UserProfile';
import people from './components/people/ListPeople';
import addPeople from './components/people/AddPeople';
import EditPeople from './components/people/EditPeople';
import floorplan from './components/floorPlan/AddFloorPlan';
import floorplanList from './components/floorPlan/ListFloorPlan';
import {Switch, Route} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import store from './store/Store';
import { clearCurrentProfile } from './actions/profileActions';


import PrivateRoute from './common/PrivateRoute';

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
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/events-info" component={SetupEvent}/>
      <PrivateRoute exact path="/events-list" component={EventList}/>
      <PrivateRoute exact path="/events-edit/:id" component={EventEdit}/>
      <PrivateRoute exact path="/participant/:id" component={AddParticipant}/>
      <PrivateRoute exact path="/app-design" component={AppDesign}/>
      <PrivateRoute exact path="/app-design-list" component={AppDesignList}/>
      <PrivateRoute exact path="/profile" component={UserProfile}/>
      <PrivateRoute exact path="/program" component={Program}/>
      <PrivateRoute exact path="/program-list" component={ProgramList}/>
      <PrivateRoute exact path="/program-edit/:id" component={ProgramEdit}/>
      <PrivateRoute exact path="/resource" component={Resources}/>
      <PrivateRoute exact path="/resource-edit/:id" component={ResourceEdit}/>
      <PrivateRoute exact path="/resources-list" component={ResourcesList}/>
      <PrivateRoute exact path="/activities" component={Activities}/>
      <PrivateRoute exact path="/activities-list" component={ActivityList}/>
      <PrivateRoute exact path="/company" component={companyProfile}/>
      <PrivateRoute exact path="/company-list" component={companyProfileList}/>
      <PrivateRoute exact path="/company-edit/:id" component={companyEdit}/>
      <PrivateRoute exact path="/organizers/:id" component={AddOrganizer}/>
      <PrivateRoute exact path="/people-list" component={people}/>
      <PrivateRoute exact path="/people" component={addPeople}/>
      <PrivateRoute exact path="/people-edit/:id" component={EditPeople}/>
      <PrivateRoute exact path="/floor-plan" component={floorplan}/>
      <PrivateRoute exact path="/floor-plan-list" component={floorplanList}/>
      {/* <Route exact path="/table" component={Table}/> */}
      {/* <Route component={NoMatch} /> */}
    </Switch>
  );
}

export default App;
