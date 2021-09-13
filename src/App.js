import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import InfoCard from './info/infocard';
import { information } from './info/info';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      information: information
    };
  }

  
  render() {
    return (
      <div className= "nara">
        <Navbar dark color = "dark">
          <div className = "container">
            <NavbarBrand href = "https://www.linkedin.com/in/narahda-lim-3b22891a4/"> About Me hehe
            </NavbarBrand>
          </div>
        </Navbar>
        <InfoCard information = {this.state.information} />
      </div>
    );
  }
}

export default App;
