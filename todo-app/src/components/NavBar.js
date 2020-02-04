import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className= "navbar"> 
    <NavLink to="/">Home</NavLink><br></br>
     <NavLink to="/about">About</NavLink><br></br>
   <NavLink to ="/help"> Help </NavLink>
    </div>
  );
};

export default NavBar;