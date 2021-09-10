import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from './header_container';

class BusinessIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses()
    }

    render(){
        if (this.props.businesses.length === 0) return null;
        const bizLis = this.props.businesses.map((biz, idx) => {
            return (
                <BusinessIndexItem rank={idx+1} rating={biz.rating} key={biz.id} business={biz} fetchBusiness={this.props.fetchBusiness}/> 
            )
        })
        return (
            <div>
                <header className='biz-index-header'>
                    <HeaderContainer />
                </header>
                <h3 className='best-text'>Best Restaurants in Chicago, IL</h3>
                <div className='map-placeholder'>MAP</div>
                <div className='biz-index-container'>
                    <ul className='biz-ul'>{bizLis}</ul>
                </div>
            </div>
        )
    }
}

export default BusinessIndex;