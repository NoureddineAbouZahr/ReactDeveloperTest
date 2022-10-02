import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <a href="" className={path == '/'?'open':''}><Link>Women</Link></a>
                <a href="" className={path == '/Men'?'open':''}><Link>Men</Link></a>
                <a href="" className={path == '/Kids'?'open':''}><Link>Kids</Link></a>
            </nav>
        );
    }
}

export default Navigation;