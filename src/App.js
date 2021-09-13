import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  
  render() {
    return (
      <><div className= "nara">
        <Navbar dark color = "dark">
          <div className = "container">
            <NavbarBrand href = "https://www.linkedin.com/in/narahda-lim-3b22891a4/"> About Me hehe
            </NavbarBrand>
          </div>
        </Navbar>
      </div>

      <div className = "voldetort">
        <Navbar dark color = "light">
          <div className = "container">
            <NavbarBrand href = "https://www.reddit.com/r/WhitePeopleTwitter/comments/7lkizz/voldetort/">
            </NavbarBrand>
          </div>
        </Navbar>
      </div> </>
    );
  }
}

export default App;
