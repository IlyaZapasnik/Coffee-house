import { Component } from 'react';

import './footer-nav.scss';
import FooterLogo from './footer_nav.svg';




class FooterNav extends Component {
    render() {
        return (
            <nav>
                <ul className='footer_nav'>
                    <li><img src={FooterLogo} alt='Coffee house logotype'></img> Coffee house</li>
                    <li>Our Coffee</li>
                    <li>For your pleasure</li>
                </ul>
            </nav>
        )
    }
}

export default FooterNav;