import {connect} from 'react-redux';
import { createReview, deleteReview } from '../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    removeReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewIndex)