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
      <div>
        <Navi></Navi>
      </div>
    );
  }
}

export default App;
