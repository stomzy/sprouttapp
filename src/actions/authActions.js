import axios from 'axios';
import { url } from '../config/config';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types'; 

export const loginUser = (loginData) => dispatch => {
    axios.post(`${url}/user/login`, loginData)
    .then((response) => {
        // console.log(response);
        const { token } = response.data
        if (response.status === 200) {
          localStorage.setItem('jwtToken', token); 
            // set auth header
            setAuthToken(token);
            // decode token to get user data
            const decoded = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decoded));
            window.location.reload();
        }
    })
    .catch((error) => {
        dispatch({
            type: GET_ERRORS,
            // payload: error.message
            payload: 'Oops, Try login with your correct credentials'
        })
    });
}

// set login user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// log users out
export const logoutUser = () => dispatch => {
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    // remove auth header
    setAuthToken(false);

    dispatch(setCurrentUser({}));
}