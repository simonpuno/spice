import {connect} from 'react-redux';
import { createReview, deleteReview } from '../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews)
})

// const mDTP = dispatch => ({

// })

export default connect(mSTP, null)(ReviewIndex)