import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Gym Booking System
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            My Bookings
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/newbookings'>Make New Booking</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
