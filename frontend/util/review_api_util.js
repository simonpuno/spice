export const createReviewUtil = review => (
    $.ajax({
        url: '/api/reviews',
        method: 'POST',
        data: {review} 
    })
)

export const fetchReviewUtil = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'GET',
    })
)

export const updateReviewUtil = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: {review} 
    })
)

export const deleteReviewUtil = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'DELETE',
    })
)