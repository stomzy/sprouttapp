import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_COMPANY_PROFILE, GET_COMPANY_PROFILES } from './types';

export const createCompanyProfile = (profileData) => dispatch => {

    axios.post(`${url}/profile/create`, profileData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_COMPANY_PROFILE,
        payload: "Company Profile Created Successfully.."
    }))
    .catch(err => console.log(err.message));
}

export const getCompanyProfiles = () => dispatch => {

    axios.get(`${url}/profile/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_COMPANY_PROFILES,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}