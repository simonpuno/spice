import React from 'react';
import EditDropdown from './edit_dropdown';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render (){
        const {review} = this.props 
        const flames = [];
        for (let i = 0; i < review.rating; i++) {
            flames.push(<FontAwesomeIcon key={i} icon={faFireAlt} />)
        }

        let edit = null;
        if (this.props.currentUser){
            if (this.props.currentUser.id === review.user_id){
                edit = <EditDropdown 
                            deleteReview={this.props.deleteReview}
                            updateReview={this.props.updateReview}
                            review={review}
                        />  
            }
        }

        return (
            <li className='review-li'>
                <div className='review-content'>
                    <h6 className='author'>{review.author_first_name} {review.author_last_init}.</h6>
                    <h6 className='author-rating'>{Object.values(flames)}</h6>
                    <p>{review.content}</p>
                </div>
                {edit}
            </li>
        )
    }
}

export default withRouter(ReviewIndexItem);