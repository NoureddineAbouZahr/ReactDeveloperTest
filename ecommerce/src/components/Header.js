import React, { Component } from 'react';
import Navigation from './Navigation';
import svg1 from './assets/svg1.png';
import svg2 from './assets/svg2.png';
import head from './assets/head.png';
import body from './assets/body.png';
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Navigation />
                <div className='logo'>
                    <img src={svg1} alt="svg1" className='svg1' />
                    <img src={svg2} alt="svg2" className='svg2' />
                    <img src={head} alt="head" className='head' />
                    <img src={body} alt="body" className='body' />


                </div>
            </div>
        );
    }
}

export default Header;