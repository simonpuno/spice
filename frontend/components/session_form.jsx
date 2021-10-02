import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            zip: '',
            birthday: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            // .then(() => this.props.history.push('/'))
    }

    handleDemoUser(e){
        e.preventDefault();
        this.setState({ email: 'demo@user.com', password: 'password'},
            () => this.props.demoLogin(this.state))
            // .then(() => this.props.history.push('/')));
    }

    handleLogoClick(e) {
        e.preventDefault();
        this.props.history.push('/')
    }

    componentWillUnmount(){
        this.props.switchPage();
    }

    render() {
        let errors = null;
        if (this.props.errors) {
            errors = this.props.errors.map((err, idx) => (
                <li className='login-error' key={idx}>{err}</li>
            ))
        }

        const link = this.props.formType === 'login' ? (
            <p>New to spice? <Link to='/signup'>Sign Up</Link></p>
        ) : (
            <p>Already on spice? <Link to='/login'>Log In</Link></p>
        )
        const topLink = this.props.formType === 'login' ? (
            <h3>New to spice? <Link to='/signup'>Sign Up</Link></h3>
        ) : (
            <h3>Already on spice? <Link to='/login'>Log In</Link></h3>
        )

        const head = this.props.formType === 'login' ? (
            <h1>Log in to spice</h1>
            
        ) : (
            <h1 className='signup-title'>Sign Up for spice</h1>
        )

        const form = this.props.formType === 'signup' ? (
            <div className='signup-form-container'>
                {head}
                {topLink}
                <ul>{errors}</ul>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                        <div className='name-inputs-container'>
                            <input
                                type="text"
                                className='signup-input'
                                value={this.state.first_name}
                                onChange={this.handleChange('first_name')}
                                placeholder='First Name'
                            />
                            <input
                                type="text"
                                className='signup-input'
                                value={this.state.last_name}
                                onChange={this.handleChange('last_name')}
                                placeholder='Last Name'
                            />
                        </div>
                        <input
                            type="text"
                            className='signup-input'
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder='Email'
                        /> 
                        <input
                            type="password"
                            className='signup-input'
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            placeholder='Password'
                        />
                        <input
                            type="text"
                            className='signup-input'
                            value={this.state.zip}
                            onChange={this.handleChange('zip')}
                            placeholder='ZIP Code'
                        />
                        <label className='signup-input' className='birthday'>Birthday (optional)
                            <input
                                type="date"
                                value={this.state.birthday}
                                onChange={this.handleChange('birthday')}
                            />
                        </label>
                        <button className='signup-input'className='session-btn' type="submit">Sign Up</button>
                    </form>
                <button className='demo-btn' onClick={this.handleDemoUser}>Login as Demo User</button>
                    { link }
                </div >
        ) : (
                <div className='session-form-container'>
                    {head}
                    {topLink}
                    <ul>{errors}</ul>
                    <form onSubmit={this.handleSubmit} className='session-form'>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder='Email'
                        />
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            placeholder='Password'
                        />
                        <button className='session-btn' type="submit">Log In</button>
                    </form>
                    <button  className='demo-btn' onClick={this.handleDemoUser}>Login as Demo User</button>
                    {link}
                </div>
        )

        return (
            // <div className='session-form-container'>
            //     {head}
            //     <ul>{errors}</ul>
            <div>
                <header className='session-header' onClick={this.handleLogoClick}>
                    <h1 className='session-logo'>spice <FontAwesomeIcon icon={faPepperHot} /></h1>
                </header>
                <div className='auth-container'>
                    <div className='session-outer-div'>{form}</div>
                    <div className='auth-photo'></div>
                </div>
            </div>
            //     {/* <button onClick={this.handleDemoUser}>Login as Demo User</button>
            //     {link}
            // </div> */}
        )
    }
}

export default withRouter(SessionForm);