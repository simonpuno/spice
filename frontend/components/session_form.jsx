import React from 'react';
import { Link } from 'react-router-dom';

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
        // this.demoUser = {email: test1, password: password}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this)
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
        this.setState({email: 'test1', password: 'password'}, 
            () => this.props.demoLogin(this.state))
            // .then(() => this.props.history.push('/')));
    }

    render() {
        let errors = null;
        if (this.props.errors) {
            errors = this.props.errors.map((err, idx) => (
                <li key={idx}>{err}</li>
            ))
        }

        const link = this.props.formType === 'login' ? (
            <Link to='/signup'>Sign Up</Link>
        ) : (
            <Link to='/login'>Log In</Link>
        )

        const form = this.props.formType === 'signup' ? (
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleChange('first_name')}
                        />
                    </label>
                    <label>Last Name:
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleChange('last_name')}
                        />
                    </label>
                    <label>email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />
                    </label>
                    <label>Zip Code:
                        <input
                            type="text"
                            value={this.state.zip}
                            onChange={this.handleChange('zip')}
                        />
                    </label>
                    <label>Birthday (optional):
                        <input
                            type="date"
                            value={this.state.birthday}
                            onChange={this.handleChange('birthday')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
        ) : (
                <form onSubmit={this.handleSubmit}>
                    <label>email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
        )

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <ul>{errors}</ul>
                {form}
                <button onClick={this.handleDemoUser}>Login as Demo User</button>
                <p>{link}</p>
            </div>
        )
    }
}

export default SessionForm;