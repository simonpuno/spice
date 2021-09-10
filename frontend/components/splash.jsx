import React from 'react';
import LogoutDropdown from './logout_dropdown'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component{

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }

    handleSignupClick(e) {
        e.preventDefault();
        this.props.history.push('/signup');
    }

    handleLoginClick(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    render(){

        const display = this.props.currentUser ? (
            <header>
                <button className='logout-btn' onClick={this.props.logout}>Logout</button>
            </header>
            // <LogoutDropdown logout={this.props.logout}/>
        ) : (
            < header className='auth-btns' >
                <button className='auth-btn-left' onClick={this.handleLoginClick}>Log In</button>
                <button className='auth-btn-right' onClick={this.handleSignupClick} >Sign Up</button>
            </header >
        )

        return (
            <div className='splash-page-container'>
                <div className='splash-top-container'>
                        {display}
                        <h1 className='splash-logo'>spice <FontAwesomeIcon icon={faPepperHot} /></h1>
                        <div className='splash-inputs-container'>
                            <label className='left-input'> Find
                                <input type="text" />
                            </label>
                            <label className='right-input'> Near
                                <input type="text" />
                            </label>
                            <button>
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                </div>
                <div className='middle-links'>

                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
}

export default withRouter(Splash);