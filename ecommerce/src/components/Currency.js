import React, { Component } from 'react';

const currency = {
    '$': 'USD',
    '€': 'EUR',
    '¥': 'JPY',
}
const USDto = {
    '$': 1,
    '€': 1.03,
    '¥': 145.38,
}
class Currency extends Component {
    state = {
        hidden: true,
        selected: '$'
    }
    toggle() {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    setSelected(key) {
        this.setState({
            selected: key
        })
    }
    render() {
        return (
            <div onClick={() => this.toggle()}>
                <div className={this.state.hidden ? 'backdrop hidden' : 'backdrop'}>

                </div>
                <div className='currencyContainer'>

                    <h3>{this.state.selected}</h3>
                    <div className="arrow-icon"></div>
                </div>
                <div className={this.state.hidden ? 'currency hidden' : 'currency'}>

                    <ol>{Object.entries(currency).map(([key, value]) => (<li onClick={() => this.setSelected(key)}>{key} {value}</li>))}
                    </ol>

                </div>
            </div>
        );
    }
}

export default Currency;