import React, {Component, useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className= "boutme">
          <Navbar color = "dark" variant = "dark ">
            <div className = "container">
              <NavbarBrand href = "https://www.linkedin.com/in/narahda-lim-3b22891a4/"> About Me hehe</NavbarBrand>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      other things
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem href = "https://www.reddit.com/r/WhitePeopleTwitter/comments/7lkizz/voldetort/">
                          voldetort
                      </DropdownItem>
                      <DropdownItem>
                          orange
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Navbar>
        </div>
      );
}

export default Navi