import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses()
    }

    render(){
        if (this.props.businesses.length === 0) return null;
        const bizLis = this.props.businesses.map(biz => {
            return (
                <BusinessIndexItem key={biz.id} business={biz}/> 
            )
        })
        return (
            <div className='biz-index-container'>
                <ul className='biz-ul'>{bizLis}</ul>
            </div>
        )
    }
}

export default BusinessIndex;