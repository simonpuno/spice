import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const display = props.currentUser ? (
        <div className='logged-in'>
            <p>Welcome, {props.currentUser.first_name}!</p>
            <button onClick={props.logout}>Logout</button>
        </div>
    ) : (
        <div className='auth-links'>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    )

    return (
        <div className='nav-bar'>
            <h1>spice</h1>
            {display}
        </div>
    )
}

export default Greeting;