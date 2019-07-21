import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import {LOADING, GET_ERRORS, CREATE_RESOURCE, GET_RESOURCES, FIND_RESOURCE } from './types';

export const createResource = (resourceData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/resource/create`, resourceData, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_RESOURCE,
                payload: "Resource Created Successfully."
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

export const getResources = () => dispatch => {
    dispatch(loading());
    axios.get(`${url}/resource/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_RESOURCES,
        payload: res.data.data
    })
    )
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
    }));
}

export const findResources = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/resource/query/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: FIND_RESOURCE,
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

export const deleteResource = (resourceData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/resource/delete/`, resourceData, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_RESOURCE,
                payload: "Resource Deleted Successfully."
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

