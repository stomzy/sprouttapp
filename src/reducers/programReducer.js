import {LOADING, CREATE_PROGRAM, GET_PROGRAMS, FIND_PROGRAMS, UPDATE_PROGRAM, DELETE_PROGRAM } from '../actions/types';

const initialState = {
    program: {},
    programs: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case CREATE_PROGRAM:
            return {
                ...state,
                program: action.payload,
                loading: false
            }
        case GET_PROGRAMS:
            return {
                ...state,
                programs: action.payload,
                loading: false
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
        case DELETE_PROGRAM:
            return {
                ...state,
                program: action.payload,
            }
        default:
            return state;
    }
}