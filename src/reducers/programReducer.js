import { CREATE_PROGRAM, GET_PROGRAMS } from '../actions/types';

const initialState = {
    program: {},
    programs: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_PROGRAM:
            return {
                ...state,
                program: action.payload,
            }
        case GET_PROGRAMS:
            return {
                ...state,
                programs: action.payload,
            }
        default:
            return state;
    }
}