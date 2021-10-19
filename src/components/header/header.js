import { Component } from 'react';

import './header.scss';
import Nav from '../nav/nav';


class Header extends Component {

    render () {
        return (
            <header className='header'>
            <div className='header_nav'>
                <Nav/>
            </div>
            <div className='wrapper'>
                <h1>Welcome</h1>
                <p>text text text </p>
                <div className='btn'>Press me</div>
            </div>
        
          </header> 
        )
    }
}

export default Header;