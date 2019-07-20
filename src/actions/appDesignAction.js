import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { GET_ERRORS, CREATE_APP_DESIGN, GET_APP_DESIGN } from './types';

export const createResource = (resourceData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/resource/create`, resourceData, { headers: headers })
        .then( res => {
            dispatch({
                type: CREATE_APP_DESIGN,
                payload: res.data
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

    axios.get(`${url}/resource/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_APP_DESIGN,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}