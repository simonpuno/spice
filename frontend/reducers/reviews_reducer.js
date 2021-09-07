import { RECEIVE_BUSINESS } from "../actions/business_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return action.business.reviews; 
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;