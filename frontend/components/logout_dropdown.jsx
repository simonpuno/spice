import React from 'react';

class ClickDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }

    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    render() {
        return (
            <div>
                <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>ICON THAT TRIGGERS DROPDOWN
                    <ul onClick={e => e.stopPropagation()} classname={this.state.show ? "show-dropdown" : "clear"}>
                        <li>Click this</li>
                        <li>Click this too</li>
                        <li>Or click this</li>
                    </ul>
                </button>
            </div>
        )
    }
}

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
                <button className='logout-btn' onClick={this.props.logout}>Logout
                    <ul onClick={(e) => e.stopPropagation()} classname={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                        <li>About Me</li>
                        <li>Friends</li>
                        <li>Settings</li>
                        <li><button className='logout-btn' onClick={this.props.logout}>Logout</button></li>
                    </ul>
                </button>
            </header>
        )
    }
}

export default LogoutDropdown;