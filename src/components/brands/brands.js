import { Component } from 'react';

import './brands.scss';

import './paper_bg.jpg';
import presto from './presto.jpg';
import solimo from './solimo.jpg';
import aromistico from './aromistico.jpg';


class Brands extends Component {
    render() {
        return(
            <div className='brands'>
                <h2>Our best</h2>
                <div className='brands_wrapper'>
                    <div className='brands_card'>
                        <img src={solimo} alt="Solimo brand" />
                        <h3>Solimo Coffee Beans 2 kg</h3>
                        <span>10.73$</span>
                    </div>
                    <div className='brands_card'>
                        <img src={presto} alt="Solimo brand" />
                        <h3>Presto Coffee Beans 1 kg</h3>
                        <span>15.99$</span>
                    </div>
                    <div className='brands_card'>
                        <img src={aromistico} alt="Solimo brand" />
                        <h3>AROMISTICO Coffee 1 kg</h3>
                        <span>6.99$</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brands;