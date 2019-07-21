import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import {LOADING, GET_ERRORS, CREATE_PROGRAM, GET_PROGRAMS, FIND_PROGRAMS, UPDATE_PROGRAM, DELETE_PROGRAM } from './types';

export const createProgram = (programData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/program/create`, programData, { headers: headers })
            .then( res => {
                dispatch({
                    type: CREATE_PROGRAM,
                    payload: "Program Created Successfully..."
                })
            resolve(res)
            }
        )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
            }
        );
    });
}

export const getPrograms = () => dispatch => {
    dispatch(loading());
    axios.get(`${url}/program/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_PROGRAMS,
        payload: res.data.data
    })
    )
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
    }));
}

export const findPrograms = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/program/query/`, query, { headers: headers })
        .then( res => {
            dispatch({
                type: FIND_PROGRAMS,
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

export const updateProgram = (query) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.put(`${url}/program/`, query, { headers: headers })
        .then( res => {
                dispatch({
                    type: UPDATE_PROGRAM,
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

export const deleteProgram = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/program/delete/`, id, { headers: headers })
            .then( res => {
                dispatch({
                    type: DELETE_PROGRAM,
                    payload: "Program Deleted Successfully..."
                })
            resolve(res)
            }
        )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
            reject(err)
            }
        );
    })
} 

export const loading = () => {
    return {
        type: LOADING,
    }
}