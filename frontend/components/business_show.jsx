import React from 'react';
import ReviewIndexContainer from './review_index_container';
import HeaderContainer from './header_container';
import Map from './map';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class BusinessShow extends React.Component{
    constructor(props){
        super(props);
        this.handleWriteReview = this.handleWriteReview.bind(this)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleWriteReview(e){
        e.preventDefault();
        this.props.history.push(`/businesses/${this.props.business.id}/reviews/new`)
    }

    render(){
        if (!this.props.business) return null;
        const {business} = this.props;
        if (!this.props.business.photoUrls) return null;
        const flames = [];
        for (let i = 0; i < business.aveRating; i++) {
            flames.push(<FontAwesomeIcon key={i} icon={faFireAlt} /> )
        }
        const numReviews = Object.values(business.reviews).length;
        const bizTypes = business.types.map((type, i) => type.biz_type)
        const types = bizTypes.join(', ')

        return (
            <div>
                <header>
                        <HeaderContainer />
                </header>
                <div className='show-container'>
                    <div className='biz-photos-container'>
                        <img src={`${business.photoUrls[0]}`} alt="" />
                        <img src={`${business.photoUrls[1]}`} alt="" />
                        <img src={`${business.photoUrls[2]}`} alt="" />
                    </div>
                    <div className='biz-show-info'>
                        <h1>{business.biz_name}</h1>
                        <h4 className='show-rating'>{Object.values(flames)} <span className='num-reviews'>{numReviews} reviews</span></h4>
                        <h4><span className='claimed'><FontAwesomeIcon icon={faCheckCircle} /> Claimed</span> &#183; $ &#183; {types}</h4>
                        <h4>Open Today?</h4>
                    </div>
                    <button className='review-btn' onClick={this.handleWriteReview}> <FontAwesomeIcon icon={faStar}/> WRITE A REVIEW</button>
                    <div className='show-section-flex-container'>
                        <div className='left-section-flex'>
                            <div className='mid-section'>
                                <div className='hours-container'>
                                    <h2>Location &amp; Hours</h2>
                                    <div className='hours'>
                                        <div className='location'>
                                            <Map businesses={[business]} />
                                            <h4>{business.address}</h4>
                                        </div>
                                        <div className='hours-list'>                         
                                            <p>Mon <span>{business.hours}</span></p>
                                            <p>Tue <span>{business.hours}</span></p>
                                            <p>Wed <span>{business.hours}</span></p>
                                            <p>Thu <span>{business.hours}</span></p>
                                            <p>Fri <span>{business.hours}</span></p>
                                            <p>Sat <span>{business.hours}</span></p>
                                            <p>Sun <span>{business.hours}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='description'>
                                <h2>About the Business</h2>
                                <p>{business.description}</p>
                            </div>
                            <ReviewIndexContainer />
                        </div>
                        <div className='right-bar-container'>
                            <div className='right-bar'>
                                <div>
                                    <a href="https://github.com/simonpuno/spice">spice GitHub</a>
                                    <span><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                                </div>
                                <div>
                                    <h4>(312) 867-5309</h4>
                                    <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                                </div>
                                <div>
                                    <h4>{business.address}</h4>
                                    <span><FontAwesomeIcon icon={faDirections} /></span>
                                </div>
                                <div>
                                    <h4><a href="mailto: simonpuno@gmail.com">Send Me an Email</a></h4>
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BusinessShow);