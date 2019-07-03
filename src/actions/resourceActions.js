import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_RESOURCE } from './types';

export const createResource = (resourceData) => dispatch => {

    axios.post(`${url}/resource/create`, resourceData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_RESOURCE,
        paylaod: "Resource Created Successfully."
    }))
    .catch(err => console.log(err));
}

// export const getPrograms = () => dispatch => {

//     axios.get(`${url}/program/`, { headers: headers })
//     .then( res => 
//         dispatch({
//         type: GET_PROGRAMS,
//         paylaod: res.data.data
//     })
//     )
//     .catch(err => console.log(err));
// }