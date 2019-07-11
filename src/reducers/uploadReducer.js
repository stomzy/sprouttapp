import { UPLOADS } from '../actions/types';

const initialState = {
    uploads: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPLOADS:
            return {
                ...state,
                uploads: [...state.uploads, action.payload]
            }
        default:
            return state;
    }
}