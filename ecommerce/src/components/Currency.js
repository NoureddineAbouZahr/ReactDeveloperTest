import React, { Component } from 'react';

class Currency extends Component {
    render() {
        return (
            <div >
                <div className='currencyContainer'>
                    
                <h3>$</h3>
                <div class="arrow-icon"></div>
                <input type="checkbox" className='dropdown' />
                </div>
                {/* <select className='currency'>
                    <option value="dollar">$ USD</option>
                    <option value="euro">€ EUR</option>
                    <option value="yen">¥ JPY </option>
                </select> */}
                <div className='currency' >

                <ol >
                    <li>$ USD</li>
                    <li>€ EUR</li>
                    <li>¥ JPY</li>
                    
                </ol>
                </div>
            </div>
        );
    }
}

export default Currency;