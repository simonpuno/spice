import React from 'react';
import HeaderContainer from './header_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content: '',
            rating: '',
            user_id: this.props.userId,
            business_id: this.props.match.params.businessId,
            val: '0',
            ratingClicked: false 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarHover = this.handleStarHover.bind(this);
        this.handleStarLeave = this.handleStarLeave.bind(this);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    handleChange(type){
        return e => {
            if (type === 'rating') {
                this.setState({ val: e.currentTarget.value, ratingClicked: true});
                // this.setState({ratingClicked: true})
            }
            this.setState({[type]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const review = this.state;
        this.props.createReview(review)
            .then(() => this.props.history.push(`/businesses/${this.state.business_id}`))
    }

    handleStarHover(e){
        e.preventDefault();
        this.setState({val: e.currentTarget.value});
    }

    handleStarLeave(e){
        e.preventDefault();
        if (this.state.ratingClicked) {
            this.setState({val: this.state.rating});
        } else {
            this.setState({val: 0});
        }
    }

    render(){
        if (!this.props.business) return null;

        let ratingText = 'Select your rating';
        if (this.state.val === '1') {
            ratingText = 'Not good'
        } else if (this.state.val === '2'){
            ratingText = "Could've been better"
        } else if (this.state.val === '3'){
            ratingText = 'OK'
        } else if (this.state.val === '4'){
            ratingText = 'Good'
        } else if (this.state.val === '5'){
            ratingText = 'Great'
        } else {
            ratingText = 'Select your rating'
        }

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
                                <label>
                                    <input onMouseEnter={this.handleStarHover} onMouseLeave={this.state.ratingClicked ? null : this.handleStarLeave} onClick={this.handleChange('rating')} type="radio" value="1" name="rating"/>
                                    <span className={this.state.val >= 1 ? 'red' : 'grey' }>
                                        <FontAwesomeIcon key='1' icon={faFireAlt} />
                                    </span>
                                </label>
                                <label>
                                    <input onMouseEnter={this.handleStarHover} onMouseLeave={this.state.ratingClicked ? null : this.handleStarLeave} onClick={this.handleChange('rating')} type="radio" value="2" name="rating"/>
                                    <span className={this.state.val >= 2 ? 'red' : 'grey'}>
                                        <FontAwesomeIcon key='2' icon={faFireAlt} />
                                    </span>
                                </label>
                                <label>
                                    <input onMouseEnter={this.handleStarHover} onMouseLeave={this.state.ratingClicked ? null : this.handleStarLeave} onClick={this.handleChange('rating')} type="radio" value="3" name="rating"/>
                                    <span className={this.state.val >= 3 ? 'red' : 'grey'}>
                                        <FontAwesomeIcon key='3' icon={faFireAlt} />
                                    </span>
                                </label>
                                <label>
                                    <input onMouseEnter={this.handleStarHover} onMouseLeave={this.state.ratingClicked ? null : this.handleStarLeave} onClick={this.handleChange('rating')} type="radio" value="4" name="rating"/>
                                    <span className={this.state.val >= 4 ? 'red' : 'grey'}>
                                        <FontAwesomeIcon key='4' icon={faFireAlt} />
                                    </span>
                                </label>
                                <label>
                                    <input onMouseEnter={this.handleStarHover} onMouseLeave={this.state.ratingClicked ? null : this.handleStarLeave} onClick={this.handleChange('rating')} type="radio" value="5" name="rating"/>
                                    <span className={this.state.val >= 5 ? 'red' : 'grey'}>
                                        <FontAwesomeIcon key='5' icon={faFireAlt} />
                                    </span>
                                </label>
                                <h6>{ratingText}</h6>
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