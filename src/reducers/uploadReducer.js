import { UPLOADS } from '../actions/types';

const initialState = [
    {uploads: null}
]

export default function(state = initialState, action) {
    switch(action.type) {
        case UPLOADS:
            return [
                ...state,
                {uploads: action.payload},
            ]
        default:
            return state;
    }
}