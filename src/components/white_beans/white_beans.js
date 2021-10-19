import { Component } from 'react';

import whiteBeans from  './white_coffee_beans.svg';

import './white_beans.scss';

class WhiteBeans extends Component {
    render() {
        return (
            <div className='white_beans'>
            <img src={whiteBeans} alt="Beans" />
            </div>
        )
    }
}

export default WhiteBeans;