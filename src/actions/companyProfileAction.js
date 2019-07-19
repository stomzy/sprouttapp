import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_COMPANY_PROFILE, GET_COMPANY_PROFILES, ADD_ORGANIZER, FIND_COMPANY, UPDATE_COMPANY } from './types';

export const createCompanyProfile = (profileData) => dispatch => {

    axios.post(`${url}/company/create`, profileData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_COMPANY_PROFILE,
        payload: "Company Profile Created Successfully.."
    }))
    .catch(err => console.log(err.message));
}

export const getCompanyProfiles = () => dispatch => {

    axios.get(`${url}/company/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_COMPANY_PROFILES,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}

export const addOrganizer = (profileData) => dispatch => {

    axios.post(`${url}/company/addOrganiserOrEvent`, profileData, { headers: headers })
    .then( res => dispatch({
        type: ADD_ORGANIZER,
        payload: res.data.data
    }))
    .catch(err => console.log(err.message));
}

export const findCompany = (query) => dispatch => {
  
    axios.post(`${url}/company/query/`, query, { headers: headers })
    .then( res => 
        dispatch({
        type: FIND_COMPANY,
        payload: res.data.data[0]
    })
    )
    .catch(err => console.log(err));
}

export const updateCompany = (query) => dispatch => {
  
    axios.put(`${url}/company/`, query, { headers: headers })
        .then( res => 
            dispatch({
            type: UPDATE_COMPANY,
            payload: res.data.data[0]
        })
  
    )
    .catch(err => console.log(err));
}