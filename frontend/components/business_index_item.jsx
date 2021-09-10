import React from 'react';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

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
        const flames = [];
        for (let i = 0; i < this.props.rating; i++) {
            flames.push(<FontAwesomeIcon key={i} icon={faFireAlt}/>)
        }

        return (
            <li  className='biz-li' onClick={this.handleClick}>
                <div className='biz-image'>
                    <img src={`${business.photoUrl}`} alt="" />
                </div>
                <div className='biz-info'>
                    <h1>{this.props.rank}. {business.biz_name}</h1>
                    {/* <h6 className='rating'><FontAwesomeIcon icon={faFireAlt} /> <FontAwesomeIcon icon={faFireAlt} /> <FontAwesomeIcon icon={faFireAlt} /> </h6> */}
                    <h6 className='rating'>{Object.values(flames)}</h6>
                    <h6>TYPE - $$</h6>
                    <p> <FontAwesomeIcon icon={faCommentAlt}/> "{business.review}"</p>
                </div>
            </li>
        )
    }
}

export default withRouter(BusinessIndexItem);