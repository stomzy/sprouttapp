import { CREATE_PEOPLE, GET_PEOPLE, FIND_PEOPLE, UPDATE_PEOPLE, CHECK_STATUS, REGISTER_USER } from '../actions/types';

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
        case REGISTER_USER:
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
        case CHECK_STATUS:
            return {
                ...state,
                people: action.payload,
            }
        default:
            return state;
    }
}