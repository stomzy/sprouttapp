import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_EVENTS, GET_EVENTS, FIND_EVENT, UPDATE_EVENT } from './types';

export const createEvent = (eventData) => dispatch => {

    axios.post(`${url}/event/create`, eventData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_EVENTS,
        payload: "Event Created Successfully..."
    }))
    .catch(err => console.log(err));
}

export const getEvents = () => dispatch => {

    axios.get(`${url}/event/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_EVENTS,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}

export const findEvent = (query) => dispatch => {
  
    axios.post(`${url}/event/query/`, query, { headers: headers })
    .then( res => 
        dispatch({
        type: FIND_EVENT,
        payload: res.data.data[0]
    })
    )
    .catch(err => console.log(err));
}

export const updateEvent = (query) => dispatch => {
  
    axios.put(`${url}/event/`, query, { headers: headers })
    .then( res => 
        dispatch({
        type: UPDATE_EVENT,
        payload: res.data.data[0]
    })
    )
    .catch(err => console.log(err));
}