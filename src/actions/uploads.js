import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { UPLOADS, SET_UPLOAD } from './types';

export const uploads = (image) => dispatch => {

    axios.post(`${url}/upload/`, image, { headers: headers })
    .then( res => {
        let urls = res.data.Location;

        if(Response.status === 200) {
            dispatch(setUploadUrl(urls));
        }
      }
    )
    .catch(err => dispatch({
        type: UPLOADS,
        paylaod: {}
    }))
}

export const setUploadUrl = (decoded) => {
    return {
        type: SET_UPLOAD,
        payload: decoded
    }
}

