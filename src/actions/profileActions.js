import axios from 'axios';
import { url } from '../config/config';
import { getJwt } from '../utils/getToken';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());

    const jwt = getJwt();
    if (!jwt) {
    this.props.history.push('/');
    }
    
    let query = {query:{"name": "victor"}}; 

    const headers = {
        'Content-Type': 'application/json',
        'access_token': `JWT ${jwt}` 
    }

    axios.post(`${url}/profile/query/`, query, { headers: headers })
        .then( res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: {}
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