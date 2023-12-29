import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <header>
            <h3 class="logo">toastMessage</h3>
            <nav>
                <ul class="nav_links">
   
                </ul>
            </nav>
            <NavLink  to=""><button>Login</button></NavLink>
            
        </header>
        </>
};

export default Navbar;
