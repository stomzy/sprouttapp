import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { GET_ERRORS, CREATE_EVENTS, GET_EVENTS, FIND_EVENT, UPDATE_EVENT, SET_EVENT, DELETE_EVENT } from './types';

export const createEvent = (eventData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/event/create`, eventData, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_EVENTS,
                payload: "Event Created Successfully..."
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

export const getEvents = () => dispatch => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/event/`, { headers: headers })
        .then( res => {
            dispatch({
                type: GET_EVENTS,
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

export const findEvent = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/event/query/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: FIND_EVENT,
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

export const updateEvent = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.put(`${url}/event/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: UPDATE_EVENT,
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

export const eventSetUp = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.put(`${url}/event/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: SET_EVENT,
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

export const deleteEvent = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/event/delete/`, id, { headers: headers })
        .then( res => {
            dispatch({
                type: DELETE_EVENT,
                payload: "Event Deleted Successfully..."
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