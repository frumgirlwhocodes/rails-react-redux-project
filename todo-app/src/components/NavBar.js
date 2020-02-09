import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className= "navbar"> 
    <NavLink to="/">Your List </NavLink><br></br>
     <NavLink to="/about">About</NavLink><br></br>
   <NavLink to ="/help"> Help </NavLink>
    </div>
  );
};

export default NavBar;