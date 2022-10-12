import React, { Component } from 'react';
import { gql } from '@apollo/client';

import { Link, useLocation } from 'react-router-dom';

const get_Categories = gql`
   query GetLocations {
     categories {
       name
     }
   }
 `;
class Navigation extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return data.categories.map(({ name }) => (
            <nav className='navigation'>
                <a href="" className={window.location.pathname == '/'+{name} ? 'open' : ''}><Link to='/'>{name}</Link></a>


            </nav>
        ))
        //(
        //     <nav className='navigation'>


        //         <a href="" className={window.location.pathname == '/'?'open':''}><Link to='/'>Women</Link></a>
        //         <a href="" className={window.location.pathname == '/MenPage'?'open':''}><Link to ='/MenPage'>Men</Link></a>
        //         <a href="" className={window.location.pathname == '/KidsPage'?'open':''}><Link to ='/KidsPage'>Kids</Link></a>
        //     </nav>
        // );
    }
}

export default Navigation;