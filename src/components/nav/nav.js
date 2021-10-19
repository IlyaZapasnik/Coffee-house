import { Component } from 'react';

import './nav.scss';
import Logo from './Logo.svg';




class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className='nav'>
                    <li><img src={Logo} alt='Coffee house logotype'></img> Coffee house</li>
                    <li>Our Coffee</li>
                    <li>For your pleasure</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;