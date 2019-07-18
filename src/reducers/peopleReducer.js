import { CREATE_PEOPLE, GET_PEOPLE, FIND_PEOPLE, UPDATE_PEOPLE } from '../actions/types';

const initialState = {
    people: {},
    peoples: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_PEOPLE:
            return {
                ...state,
                people: action.payload,
            }
        case GET_PEOPLE:
            return {
                ...state,
                peoples: action.payload,
            }
        case FIND_PEOPLE:
            return {
                ...state,
                people: action.payload,
            }
        case UPDATE_PEOPLE:
            return {
                ...state,
                people: action.payload,
            }
        default:
            return state;
    }
}