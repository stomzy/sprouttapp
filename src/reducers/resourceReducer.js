import { CREATE_RESOURCE, GET_RESOURCES, FIND_RESOURCE } from '../actions/types';

const initialState = {
    resource: {},
    resources: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_RESOURCE:
            return {
                ...state,
                resource: action.payload,
            }
        case GET_RESOURCES:
            return {
                ...state,
                resources: action.payload,
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