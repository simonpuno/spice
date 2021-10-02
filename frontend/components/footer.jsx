import React from 'react';

const Footer = props => {
    return (
        <div className='footer'>
            <div>
                <h1>Contact</h1>
                <ul>
                    <li><a href="mailto:simonpuno@gmail.com" target='_blank'>Email</a></li>
                    <li><a href="http://www.simonpuno.com/" target='_blank'>Portfolio</a></li>
                </ul>
            </div>
            <div>
                <h1>Social</h1>
                <ul>
                    <li><a target="_blank" href="https://github.com/simonpuno/spice">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/simonpuno/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://angel.co/u/simon-puno" target='_blank'>AngelList</a></li>
                </ul>
            </div>
            <div>
                <h1>Other Projects</h1>
                <ul>
                    <li><a href="https://simonpuno.github.io/JSpardy/" target='_blank'>JSpardy!</a></li>
                    <li><a href="https://sudoku-book.herokuapp.com/" target='_blank'>SudokuBook</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;