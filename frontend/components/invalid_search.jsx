import React, { Component } from 'react';
import HeaderContainer from './header_container';
import Footer from './footer';

export default class InvalidSearch extends Component {
    render() {
        return (
            <div>
                <header className='biz-index-header'>
                    <HeaderContainer/>
                </header>
                <div className='invalid-container'>
                    <h1>Sorry, we couldn't find what you were looking for.</h1>
                    <p>At this time, spice supports the following searches:</p>
                    <ul>
                        <li>Mexican</li>
                        <li>Tacos</li>
                        <li>Sushi</li>
                        <li>Japanese</li>
                        <li>Ramen</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                    </ul>
                    <p>Searches are limited to <span>Chicago, IL</span>.</p>
                    <h3>Try searching for 'tacos' in 'chicago'!</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}
