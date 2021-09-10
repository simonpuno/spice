import React from 'react';
// import logo from 'app/assets/images/Mario.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class LogoutDropdown extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const newShow = !this.state.show;
        this.setState({show: newShow})
    }

    render(){
        return (
            <header>
                <button className='dropdown-btn' onFocus={this.handleChange} onBlur={this.handleChange}>
                    {/* onClick={this.handleChange} */}
                    {/* <img src={logo} alt="avatar" /> */}
                    <FontAwesomeIcon icon={faCaretDown}/>
                    <div onClick={(e) => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                        <ul className='dropdown-list'>
                            <li>About Me</li>
                            <li>Friends</li>
                            <li>Settings</li>
                            <li className='logout-link' onClick={this.props.logout}>Logout</li>
                            {/* className='logout-btn' */}
                        </ul>
                    </div>
                </button>
            </header>
        )
    }
}

export default LogoutDropdown;