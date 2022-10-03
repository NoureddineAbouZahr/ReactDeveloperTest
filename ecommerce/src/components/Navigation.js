import React, { Component } from 'react';
import {Link, useLocation} from 'react-router-dom';
class Navigation extends Component {
 constructor(props){
    super(props);
    
 }
    
    render() {
        return (
            <nav className='navigation'>
                <a href="" className={window.location.pathname == '/'?'open':''}><Link to='/'>Women</Link></a>
                <a href="" className={window.location.pathname == '/MenPage'?'open':''}><Link to ='/MenPage'>Men</Link></a>
                <a href="" className={window.location.pathname == '/KidsPage'?'open':''}><Link to ='/KidsPage'>Kids</Link></a>
            </nav>
        );
    }
}

export default Navigation;