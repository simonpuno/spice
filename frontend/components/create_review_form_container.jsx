import {connect} from 'react-redux';
import { fetchBusiness } from '../actions/business_actions';
import { createReview } from '../actions/review_actions';
import { receiveRoute } from '../actions/route_actions';
import CreateReviewForm from './create_review_form';

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    userId: state.session.id,
    errors: state.errors.review,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    receiveRoute: route => dispatch(receiveRoute(route))
})

export default connect(mSTP, mDTP)(CreateReviewForm);