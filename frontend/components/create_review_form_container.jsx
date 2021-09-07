import {connect} from 'react-redux';
import { fetchBusiness } from '../actions/business_actions';
import { createReview } from '../actions/review_actions';
import CreateReviewForm from './create_review_form'

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    userId: state.session.id 
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
})

export default connect(mSTP, mDTP)(CreateReviewForm);