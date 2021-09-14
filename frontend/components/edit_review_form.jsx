import React from 'react';
import HeaderContainer from './header_container';
import { withRouter } from 'react-router-dom';

class EditReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.reviewId,
            content: this.props.review.content,
            rating: this.props.review.rating,
            user_id: this.props.userId,
            business_id: this.props.match.params.businessId
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchReview(this.props.match.params.reviewId);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = this.state;
        this.props.updateReview(review)
            .then(() => this.props.history.push(`/businesses/${this.state.business_id}`))
    }

    render (){
        if (!this.props.business || !this.props.review) return null;
        return (
            <div>
                <header>
                    <HeaderContainer />
                </header>
                <div className='review-form-container'>
                    <h2>{this.props.business.biz_name}</h2>
                    <form className='review-form'>
                        <div className='review-inputs'>
                            <div className='rating-inputs'>
                                <label>1</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="1" name="rating" />
                                <label>2</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="2" name="rating" />
                                <label>3</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="3" name="rating" />
                                <label>4</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="4" name="rating" />
                                <label>5</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="5" name="rating" />
                                <h6>Select your rating:</h6>
                            </div>
                            <textarea
                                value={this.state.content}
                                onChange={this.handleChange('content')}
                                cols="30"
                                rows="10"
                            />
                        </div>
                        <button onClick={this.handleSubmit}>POST REVIEW</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditReviewForm);