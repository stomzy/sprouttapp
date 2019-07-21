import {LOADING, CREATE_EVENTS, GET_EVENTS, FIND_EVENT, UPDATE_EVENT, SET_EVENT, DELETE_EVENT } from '../actions/types';

const initialState = {
    event: {},
    events: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case CREATE_EVENTS:
            return {
                ...state,
                event: action.payload,
            }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case FIND_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case UPDATE_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case SET_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        case DELETE_EVENT:
            return {
                ...state,
                event: action.payload,
            }
        default:
            return state;
    }
}
