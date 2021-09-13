import {connect} from 'react-redux';
import { createReview, deleteReview, updateReview } from '../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(ReviewIndex)