import React from 'react';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

class BusinessIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.shortenReview = this.shortenReview.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/businesses/${this.props.business.id}`);
    }

    shortenReview(rev){
        let newRev = []
        const words = rev.split(" ");

        for (let i = 0; i < 14; i++) {
            const ele = words[i];
            newRev.push(ele);
        }
        return newRev.join(" ");
    }

    render(){
        if (!this.props.business) return null;
        const {business} = this.props 
        const flames = [];
        for (let i = 0; i < this.props.rating; i++) {
            flames.push(<FontAwesomeIcon key={i} icon={faFireAlt}/>)
        }

        const bizTypes = business.types.map((type, i) => <span key={i}>{type.biz_type}</span>)
        if (!business.review) return null;
        const shortReview = this.shortenReview(business.review) 

        return (
            <li  className='biz-li' onClick={this.handleClick}>
                <div className='biz-image'>
                    <img src={`${business.photoUrl}`} alt="" />
                </div>
                <div className='biz-info'>
                    <h1>{this.props.rank}. {business.biz_name}</h1>
                    {/* <h6 className='rating'><FontAwesomeIcon icon={faFireAlt} /> <FontAwesomeIcon icon={faFireAlt} /> <FontAwesomeIcon icon={faFireAlt} /> </h6> */}
                    <div className='rating-container'>
                        <h6 className='rating'>{Object.values(flames)}</h6>
                        <span>{business.numReviews}</span>
                    </div>
                    <h6 className='types'>{bizTypes} $</h6>
                    <div className='review-preview'>
                        <FontAwesomeIcon icon={faCommentAlt}/> 
                        <p>"{shortReview}" <span className='more'>more</span></p>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(BusinessIndexItem);