import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_EVENTS, GET_EVENTS } from './types';

export const createEvent = (eventData) => dispatch => {

    axios.post(`${url}/event/create`, eventData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_EVENTS,
        paylaod: "Event Created Successfully..."
    }))
    .catch(err => console.log(err));
}

export const getEvents = () => dispatch => {

    axios.get(`${url}/event/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_EVENTS,
        paylaod: res.data.data
    })
    )
    .catch(err => console.log(err));
}