import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          <h1>MyWebsite</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
    
        </NavMenu>
        
      </Nav>
    </>
  );
}

export default Navbar;