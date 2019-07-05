import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import errorReducer from './errorReducer';
import eventReducer from './eventReducer';
import programReducer from './programReducer';
import resourceReducer from './resourceReducer';
import activityReducer from './activityReducer';
import companyProfileReducer from './companyProfileReducer';


export default combineReducers({
    auth: authReducer,
    profile: profileReducer, 
    errors: errorReducer,
    events: eventReducer,
    programs: programReducer,
    resources: resourceReducer,
    activities: activityReducer,
    companyProfiles: companyProfileReducer
});