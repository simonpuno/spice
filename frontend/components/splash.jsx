import React from 'react';
import LogoutDropdown from './logout_dropdown';
import SearchContainer from './search_container';
import Footer from './footer';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component{

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }

    handleSignupClick(e) {
        e.preventDefault();
        this.props.receiveRoute(this.props.location.pathname);
        this.props.history.push('/signup');
    }

    handleLoginClick(e) {
        e.preventDefault();
        this.props.receiveRoute(this.props.location.pathname);
        this.props.history.push('/login');
    }

    render(){

        const display = this.props.currentUser ? (
            // <header>
            //     <button className='logout-btn' onClick={this.props.logout}>Logout</button>
            // </header>
            <LogoutDropdown logout={this.props.logout}/>
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
                        <SearchContainer /> 
                </div>
                <div className='middle-links'>

                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Splash);