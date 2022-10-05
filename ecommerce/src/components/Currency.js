import React, { Component } from 'react';

class Currency extends Component {
    render() {
        return (
            <div>
                <h3>$</h3>
                <input type="checkbox" className='dropdown' />
                <div class="arrow-icon"></div>
                {/* <select className='currency'>
                    <option value="dollar">$ USD</option>
                    <option value="euro">€ EUR</option>
                    <option value="yen">¥ JPY </option>
                </select> */}
                <ol className='currency'>
                    <li>$ USD</li>
                    <li>€ EUR</li>
                    <li>¥ JPY</li>
                    
                </ol>
            </div>
        );
    }
}

export default Currency;