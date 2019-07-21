import {LOADING, CREATE_RESOURCE, GET_RESOURCES, FIND_RESOURCE } from '../actions/types';

const initialState = {
    resource: {},
    resources: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case CREATE_RESOURCE:
            return {
                ...state,
                resource: action.payload,
                loading: false
            }
        case GET_RESOURCES:
            return {
                ...state,
                resources: action.payload,
                loading: false
            }
        case FIND_RESOURCE:
            return {
                ...state,
                resource: action.payload,
            }
        default:
            return state;
    }
}