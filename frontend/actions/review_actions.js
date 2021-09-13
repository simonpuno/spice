import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'


const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review 
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors 
})

export const fetchReview = reviewId => dispatch => (
    ReviewApiUtil.fetchReviewUtil(reviewId)
        .then(review => dispatch(receiveReview(review)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createReview = review => dispatch => (
    ReviewApiUtil.createReviewUtil(review)
        .then(review => dispatch(receiveReview(review)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const updateReview = review => dispatch => (
    ReviewApiUtil.updateReviewUtil(review)
        .then(review => dispatch(receiveReview(review)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReviewUtil(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)