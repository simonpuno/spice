import React from 'react';
import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component{
    render(){
        const {reviews, createReview, deleteReview, updateReview, currentUser} = this.props
        if (reviews.length === 0) return null;
        const reviewLis = reviews.map(review => (
            <ReviewIndexItem 
                key={review.id} 
                review={review}
                currentUser={currentUser}
                createReview={createReview}
                deleteReview={deleteReview}
                updateReview={updateReview}
            />
        ))

        return (
            <div className='review-index-container'>
                <ul className='review-ul'>{reviewLis}</ul>
            </div>
        )
    }
}

export default ReviewIndex;