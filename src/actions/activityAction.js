import axios from 'axios';
import { url } from '../config/config';
import { headers } from '../utils/headerJWT'

import { CREATE_ACTIVITY, GET_ACTIVITIES } from './types';

export const createActivity = (activityData) => dispatch => {

    axios.post(`${url}/activity/create`, activityData, { headers: headers })
    .then( res => dispatch({
        type: CREATE_ACTIVITY,
        payload: "Activity Created Successfully..."
    }))
    .catch(err => console.log(err));
}

export const getActivities = () => dispatch => {

    axios.get(`${url}/activity/`, { headers: headers })
    .then( res => 
        dispatch({
        type: GET_ACTIVITIES,
        payload: res.data.data
    })
    )
    .catch(err => console.log(err));
}