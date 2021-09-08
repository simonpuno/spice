import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleSignupClick(e){
        e.preventDefault();
        this.props.history.push('/signup');
    }

    handleLoginClick(e){
        e.preventDefault();
        this.props.history.push('/login');
    }

    handleLogoClick(e){
        e.preventDefault();
        this.props.history.push('/')
    }

    render(){
        const display = this.props.currentUser ? (
            <div className='logged-in'>
                <p>Welcome, {this.props.currentUser.first_name}!</p>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <div className='auth-links'>
                <button className='login-btn' onClick={this.handleLoginClick}>Log In</button>
                <button className='signup-btn' onClick={this.handleSignupClick} >Sign Up</button>
            </div>
        )

        return (
            <div className='nav-bar'>
                <h1 className='title' onClick={this.handleLogoClick}>spice <FontAwesomeIcon icon={faPepperHot}/></h1>
                {display}
            </div>
        )
    }
}

export default withRouter(Header);