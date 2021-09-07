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
            <li onClick={this.handleClick}>
                <h3>{business.biz_name}</h3>
                <h6>RATING</h6>
                <p>REVIEW INFO (will be its own component)</p>
            </li>
        )
    }
}

export default withRouter(BusinessIndexItem);