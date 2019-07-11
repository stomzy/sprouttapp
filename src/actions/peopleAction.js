import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_PEOPLE, GET_PEOPLE } from './types';

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