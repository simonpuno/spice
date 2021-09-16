import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const businessesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return Object.assign({}, action.businesses)
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business 
            return newState;
        default:
            return oldState;
    }
}

export default businessesReducer;