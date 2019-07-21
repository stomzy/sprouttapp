import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { GET_ERRORS, ADD_PARTICIPANT, VERIFY_PARTICIPANT } from './types';

export const addParticipant = (programData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/event/addParticipant`, programData, { headers: headers })
        .then( res => {
            dispatch({
                type: ADD_PARTICIPANT,
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

export const verifyParticipant = (programData) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/event/verifyParticipant`, programData, { headers: headers })
        .then( res => {
            dispatch({
                type: VERIFY_PARTICIPANT,
                payload: res.message
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
