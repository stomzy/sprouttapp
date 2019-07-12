import { CREATE_FLOORPLAN, GET_FLOORPLAN } from '../actions/types';

const initialState = {
    floor: {},
    floors: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_FLOORPLAN:
            return {
                ...state,
                floor: action.payload,
            }
        case GET_FLOORPLAN:
            return {
                ...state,
                floors: action.payload,
            }
        default:
            return state;
    }
}