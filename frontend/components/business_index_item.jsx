import React from 'react';
import {withRouter} from 'react-router-dom'

class BusinessIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/businesses/${this.props.business.id}`);
    }

    render(){
        const {business} = this.props 
        return (
            <li  className='biz-li' onClick={this.handleClick}>
                <div className='biz-image'>
                    IMAGE
                </div>
                <div className='biz-info'>
                    <h1>{business.biz_name}</h1>
                    <h6>RATING</h6>
                    <p>REVIEW INFO (will be its own component)</p>
                </div>
            </li>
        )
    }
}

export default withRouter(BusinessIndexItem);