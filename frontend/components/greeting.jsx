import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const display = props.currentUser ? (
        <div>
            <p>Welcome, {props.currentUser.first_name}!</p>
            <button onClick={props.logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting;