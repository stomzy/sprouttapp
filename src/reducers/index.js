import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import errorReducer from './errorReducer';
import eventReducer from './eventReducer';


export default combineReducers({
    auth: authReducer,
    profile: profileReducer, 
    errors: errorReducer,
    events: eventReducer
});