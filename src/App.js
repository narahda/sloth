import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import InfoCard from './info/infocard';
import { information } from './info/info';
import Navi from './components/navigation';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      information: information
    };
  }

  
  render() {
    return (
      <div className= "boutme">
        <Navbar dark color = "dark">
          <div className = "container">
            <NavbarBrand href = "https://www.linkedin.com/in/narahda-lim-3b22891a4/"> About Me hehe</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
