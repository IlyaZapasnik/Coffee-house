import { Component } from 'react';
import 'normalize.css';
import Main from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';

import './app.scss';

class App extends Component {

  
  render() {
    return(
        <div>
          <Main/>
          
          <Footer/>
        </div>
    )
  }
}

export default App;
