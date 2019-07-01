import axios from 'axios';
import { url } from '../config/config';

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`${url}/profile/query/`)
        .then( res => dispatch({
            type: GET_PROFILE,
            paylaod: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            paylaod: {}
        }))
}

// profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING,
    }
}

//clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE,
    }
}