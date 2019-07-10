import { CREATE_COMPANY_PROFILE, GET_COMPANY_PROFILES } from '../actions/types';

const initialState = {
    companyProfile: {},
    companyProfiles: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_COMPANY_PROFILE:
            return {
                ...state,
                companyProfile: action.payload,
            }
        case GET_COMPANY_PROFILES:
            return {
                ...state,
                companyProfiles: action.payload,
            }
        default:
            return state;
    }
}