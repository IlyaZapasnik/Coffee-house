import { Component } from 'react';

import './main.scss';
import './main_bg.jpg';

import WhiteBeans from '../white_beans/white_beans';
import Nav from '../nav/nav';
import About from '../about/about';
import Brands from '../brands/brands';


class Main extends Component {
    render() {
        return (
            <>
            <div className='main'>
                <Nav/>
                <div className='main_content'>
                    <h1>Everything You Love About Coffee</h1>
                    <WhiteBeans/>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <div className='main_btn'>More</div>
                </div>
            </div>

            <About/>
            <Brands/>
            </>
        )
    }
}

export default Main;