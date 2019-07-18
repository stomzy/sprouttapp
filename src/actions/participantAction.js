import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { ADD_PARTICIPANT, VERIFY_PARTICIPANT } from './types';

export const addParticipant = (programData) => dispatch => {

    axios.post(`${url}/event/addParticipant`, programData, { headers: headers })
    .then( res => dispatch({
        type: ADD_PARTICIPANT,
        payload: res.data.data
    }))
    .catch(err => console.log(err));
}

export const verifyParticipant = (programData) => dispatch => {

    axios.post(`${url}/event/verifyParticipant`, programData, { headers: headers })
    .then( res => dispatch({
        type: VERIFY_PARTICIPANT,
        payload: res.message
    }))
    .catch(err => console.log(err));
}
