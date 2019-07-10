import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_PROGRAM, GET_PROGRAMS } from './types';

export const createProgram = (programData) => dispatch => {

    axios.post(`${url}/program/create`, programData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_PROGRAM,
        payload: "Program Created Successfully..."
    }))
    .catch(err => console.log(err));
}

export const getPrograms = () => dispatch => {

    axios.get(`${url}/program/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_PROGRAMS,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}