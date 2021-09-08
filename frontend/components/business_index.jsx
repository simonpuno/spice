import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from './header_container';

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
            <div>
                <header>
                    <HeaderContainer />
                </header>
                <div className='biz-index-container'>
                    <ul className='biz-ul'>{bizLis}</ul>
                </div>
            </div>
        )
    }
}

export default BusinessIndex;