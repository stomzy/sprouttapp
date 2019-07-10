import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { UPLOADS } from './types';

export const uploads = (image) => dispatch => {

    axios.post(`${url}/upload/`, image, { headers: headers })
    .then( res => 
        dispatch({
            type: UPLOADS,
            payload: res.data.Location
        })
    )
    .catch(err => dispatch({
        type: UPLOADS,
        paylaod: {}
    }))
}
