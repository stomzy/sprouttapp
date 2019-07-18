import { ADD_PARTICIPANT, VERIFY_PARTICIPANT } from '../actions/types';

const initialState = {
    participant: {},
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PARTICIPANT:
            return {
                ...state,
                participant: action.payload,
            }
        case VERIFY_PARTICIPANT:
            return {
                ...state,
                participant: action.payload,
            }
        default:
            return state;
    }
}