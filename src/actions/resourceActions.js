import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_RESOURCE, GET_RESOURCES, FIND_RESOURCE } from './types';

export const createResource = (resourceData) => dispatch => {

    axios.post(`${url}/resource/create`, resourceData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_RESOURCE,
        payload: "Resource Created Successfully."
    }))
    .catch(err => console.log(err));
}

export const getResources = () => dispatch => {

    axios.get(`${url}/resource/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_RESOURCES,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}

export const findResources = (query) => dispatch => {
  
    axios.post(`${url}/resource/query/`, query, { headers: headers })
    .then( res => 
        dispatch({
        type: FIND_RESOURCE,
        payload: res.data.data[0]
    })
    )
    .catch(err => console.log(err));
}

// export const updatePeople = (query) => dispatch => {
  
//     axios.put(`${url}/profile/`, query, { headers: headers })
//     .then( res => 
//         dispatch({
//         type: UPDATE_PEOPLE,
//         payload: res.data.data[0]
//     })
//     )
//     .catch(err => console.log(err));
// }