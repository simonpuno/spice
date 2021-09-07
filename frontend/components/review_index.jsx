import React from 'react';
import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component{
    render(){
        const {reviews, createReview, removeReview} = this.props
        if (reviews.length === 0) return null;
        const reviewLis = reviews.map(review => (
            <ReviewIndexItem 
                key={review.id} 
                review={review}
                createReview={createReview}
                removeReview={removeReview}
            />
        ))

        return (
            <div>
                <ul>{reviewLis}</ul>
            </div>
        )
    }
}

export default ReviewIndex;