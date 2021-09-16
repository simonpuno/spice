import { connect } from 'react-redux';
import { fetchBusiness } from '../actions/business_actions';
import { fetchReview, updateReview } from '../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    review: state.entities.reviews[ownProps.match.params.reviewId],
    userId: state.session.id,
    errors: state.errors.review
})

const mDTP = dispatch => ({
    updateReview: review => dispatch(updateReview(review)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchReview: reviewId => dispatch(fetchReview(reviewId))
})

export default connect(mSTP, mDTP)(EditReviewForm)