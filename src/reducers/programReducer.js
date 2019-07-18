import { CREATE_PROGRAM, GET_PROGRAMS, FIND_PROGRAMS, UPDATE_PROGRAM } from '../actions/types';

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
        case FIND_PROGRAMS:
            return {
                ...state,
                programs: action.payload,
            }
        case UPDATE_PROGRAM:
            return {
                ...state,
                program: action.payload,
            }
        default:
            return state;
    }
}