import React from 'react';

class ReviewIndexItem extends React.Component{
    render (){
        const {review} = this.props 
        return (
            <li>
                <h6>Author ID: {review.user_id}</h6>
                <h6>Rating: {review.rating}</h6>
                <p>{review.content}</p>
            </li>
        )
    }
}

export default ReviewIndexItem;