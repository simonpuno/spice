import React from 'react';
import ReviewIndexContainer from './review_index_container';
import { withRouter } from 'react-router-dom'

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

        return (
            <div>
                <h1>{business.biz_name}</h1>
                <h4>BIZ TYPE: {business.type_id}</h4>
                <h4>ADDRESS: {business.address}</h4>
                <h4>HOURS: {business.hours}</h4>
                <button onClick={this.handleWriteReview}>WRITE A REVIEW</button>
                <p>DESCRIPTION</p>
                <p>REVIEW INDEX WILL GO BELOW</p>
                <ReviewIndexContainer />
            </div>
        )
    }
}

export default withRouter(BusinessShow);