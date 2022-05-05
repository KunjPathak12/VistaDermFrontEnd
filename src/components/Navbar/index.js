import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import{Nav, NavbarContainer, NavLogo, MobileIcon, 
          NavMenu, NavItem, NavLinks, NavBtn, 
          NavBtnLinkUp,NavBtnLink} 
          from './NavbarElements';

const Navbar = ({toggle}) => {

  const[scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }
  

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}> VistaDerm </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={300} spy={true} exact="true" offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="search" smooth={true} duration={300} spy={true} exact="true" offset={-80}>
                Find Doctors
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="vconsult" smooth={true} duration={300} spy={true} exact="true" offset={-80}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="medicines" smooth={true} duration={300} spy={true} exact="true" offset={-80}>
                Medicines
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="labtest" smooth={true} duration={300} spy={true} exact="true" offset={-80}>
                Lab Tests
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLinkUp to="/signup">
                Sign Up
              </NavBtnLinkUp>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/signin">
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;