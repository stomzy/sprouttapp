import { GET_ERRORS } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload
        // case TEST_LOGIN_DISPATCH:
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        default:
            return state;
    }
}