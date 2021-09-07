import React from 'react';
import ReviewIndexContainer from './review_index_container';

class BusinessShow extends React.Component{
    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
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
                <p>DESCRIPTION</p>
                <p>REVIEW INDEX WILL GO BELOW</p>
                <ReviewIndexContainer />
            </div>
        )
    }
}

export default BusinessShow;