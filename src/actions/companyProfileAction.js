import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import {LOADING, GET_ERRORS, CREATE_COMPANY_PROFILE, GET_COMPANY_PROFILES, ADD_ORGANIZER, FIND_COMPANY, UPDATE_COMPANY } from './types';

export const createCompanyProfile = (profileData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/company/create`, profileData, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_COMPANY_PROFILE,
                payload: "Company Profile Created Successfully.."
            })
            resolve(res)
        })
        .catch(err => { 
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
        }); 
    });
}

export const getCompanyProfiles = () => dispatch => {
    dispatch(loading());
    axios.get(`${url}/company/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_COMPANY_PROFILES,
        payload: res.data.data
    })
    )
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
    }));
}

export const addOrganizer = (profileData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/company/addOrganiserOrEvent`, profileData, { headers: headers })
        .then( res => {
            dispatch({
                type: ADD_ORGANIZER,
                payload: res.data.data
            })
            resolve(res)
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
        });
    });
}

export const findCompany = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/company/query/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: FIND_COMPANY,
                payload: res.data.data[0]
            })
            resolve(res)
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
        });
    });
}

export const updateCompany = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.put(`${url}/company/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: UPDATE_COMPANY,
                payload: res.data.data[0]
            })
            resolve(res)
        })
        .catch(err => { 
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
        });
    });
}

export const deleteCompany = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/company/delete/`, id, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_COMPANY_PROFILE,
                payload: "Company deleted Successfully.."
            })
            resolve(res)
        })
        .catch(err => { 
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
        }); 
    });
}

export const loading = () => {
    return {
        type: LOADING,
    }
}