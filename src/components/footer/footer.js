import { Component } from 'react';

import './footer.scss';


import Nav from '../nav/nav';
import Beans from '../beans/beans';
import FooterNav from '../footer-nav/footer-nav';


class Footer extends Component {

    render() {
        return (
            <footer className='footer'>
                
                <div>
                 <FooterNav/>
                </div>
                
                <div>
                    <Beans/>
                </div>
        
          </footer>
        )
    }
}

export default Footer;