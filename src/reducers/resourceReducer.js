import { CREATE_RESOURCE } from '../actions/types';

const initialState = {
    resource: {},
    resources: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_RESOURCE:
            return {
                ...state,
                program: action.payload,
            }
        // case GET_PROGRAMS:
        //     return {
        //         ...state,
        //         programs: action.paylaod,
        //     }
        default:
            return state;
    }
}