import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_FLOORPLAN, GET_FLOORPLAN } from './types';

export const createFloor = (programData) => dispatch => {

    axios.post(`${url}/floorplan/create`, programData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_FLOORPLAN,
        payload: "Floor Plan Created Successfully..."
    }))
    .catch(err => console.log(err));
}

export const getFloors = () => dispatch => {

    axios.get(`${url}/floorplan/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_FLOORPLAN,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}