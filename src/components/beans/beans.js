import { Component } from 'react';

import Vector from  './Vector.svg';

import './beans.scss';

class Beans extends Component {
    render() {
        return (
            <div className='vector'>
                <img src={Vector} alt="Beans" />
            </div>
        )
    }
}

export default Beans;