import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_PEOPLE, GET_PEOPLE, FIND_PEOPLE, UPDATE_PEOPLE } from './types';

export const createPeople = (programData) => dispatch => {

    axios.post(`${url}/profile/create`, programData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_PEOPLE,
        payload: res.data.data
    }))
    .catch(err => console.log(err));
}

export const getPeople = () => dispatch => {

    axios.get(`${url}/profile/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_PEOPLE,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}

export const findPeople = (query) => dispatch => {
  
    axios.post(`${url}/profile/query/`, query, { headers: headers })
    .then( res => 
        dispatch({
        type: FIND_PEOPLE,
        payload: res.data.data[0]
    })
    )
    .catch(err => console.log(err));
}

export const updatePeople = (query) => dispatch => {
  
    axios.put(`${url}/profile/`, query, { headers: headers })
        .then( res => 
            dispatch({
            type: UPDATE_PEOPLE,
            payload: res.data.data[0]
        })
  
    )
    .catch(err => console.log(err));
}