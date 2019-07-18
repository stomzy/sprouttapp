import { CREATE_ACTIVITY, GET_ACTIVITIES } from '../actions/types';

const initialState = {
    activity: {},
    activities: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_ACTIVITY:
            return {
                ...state,
                activity: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        default:
            return state;
    }
}