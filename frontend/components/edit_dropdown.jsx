import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class LogoutDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleEditReview = this.handleEditReview.bind(this);
        this.handleRemoveReview = this.handleRemoveReview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemoveReview(e){
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
    }

    handleEditReview(e) {
        e.preventDefault();
        this.props.history.push(`/businesses/${this.props.match.params.businessId}/reviews/${this.props.review.id}/edit`)
    }

    handleChange(e) {
        const newShow = !this.state.show;
        this.setState({ show: newShow })
    }

    render() {

        return (
            <button className='edit-btn' onFocus={this.handleChange} onBlur={this.handleChange}><FontAwesomeIcon icon={faEllipsisH} />
                <div onClick={(e) => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                    <ul className='dropdown-list'>
                        <li onClick={this.handleEditReview}>Edit Review</li>
                        <li onClick={this.handleRemoveReview}>Remove Review</li>
                    </ul>
                </div>
            </button>
        )
    }
}

export default withRouter(LogoutDropdown);