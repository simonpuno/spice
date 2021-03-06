import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            find: "",
            near: ""
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validCategories = [
            'mexican',
            'tacos',
            'sushi',
            'japanese',
            'ramen',
            'lunch',
            'dinner'
        ]
    }

    handleChange(type){
        return e => this.setState({ [type]: e.target.value })
    }

    handleSearchClick(e) {
        e.preventDefault();
        if (this.validCategories.includes(this.state.find.toLowerCase()) && this.state.near.toLowerCase().includes('chicago')){
            this.props.updateFilter('biz_type', this.state.find)
            this.props.history.push('/businesses')
        } else {
            this.props.history.push('/invalid')
        }
    }

    handleSubmit(e){
        if (e.key === "Enter"){
            if (this.validCategories.includes(this.state.find.toLowerCase()) && this.state.near.toLowerCase().includes('chicago')) {
                this.props.updateFilter('biz_type', this.state.find)
                this.props.history.push('/businesses')
            } else {
                this.props.history.push('/invalid')
            }
        };
    }

    render(){
        return (
            <div className='splash-inputs-container'>
                <label className='left-input'> Find
                    <input placeholder='sushi, tacos, dinner...' 
                        onChange={this.handleChange('find')} 
                        onKeyPress={this.handleSubmit}
                        type="text" 
                    />
                </label>
                <label className='right-input'> Near
                    <input placeholder='Chicago, IL' 
                        onChange={this.handleChange('near')} 
                        onKeyPress={this.handleSubmit}
                        type="text" 
                    />
                </label>
                <button onClick={this.handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        )
    }
}

export default withRouter(Search);