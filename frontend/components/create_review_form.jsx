import React from 'react';
import HeaderContainer from './header_container';
import { withRouter } from 'react-router-dom';

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content: '',
            rating: '',
            user_id: this.props.userId,
            business_id: this.props.match.params.businessId 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    handleChange(type){
        return e => this.setState({[type]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const review = this.state;
        this.props.createReview(review)
            .then(() => this.props.history.push(`/businesses/${this.state.business_id}`))
    }

    render(){
        if (!this.props.business) return null;
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
                                    <input onChange={this.handleChange('rating')} type="radio" value="1" name="rating"/>
                                <label>2</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="2" name="rating"/>
                                <label>3</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="3" name="rating"/>
                                <label>4</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="4" name="rating"/>
                                <label>5</label>
                                    <input onChange={this.handleChange('rating')} type="radio" value="5" name="rating"/>
                                <h6>Select your rating</h6>
                            </div>
                            <textarea  
                                value={this.state.content}
                                onChange={this.handleChange('content')}
                                cols="30" 
                                rows="10"
                                placeholder="We're no stangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand. Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you."
                            />
                        </div>
                        <button onClick={this.handleSubmit}>POST REVIEW</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateReviewForm);