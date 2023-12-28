import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <header>
            <h3 class="logo">toastMessage</h3>
            <nav>
                <ul class="nav_links">
                    <li><NavLink to="">Home</NavLink></li>
                    <li><NavLink to="">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>

                    <li><NavLink to="">Contacts</NavLink></li>
                    <li><NavLink to="">Register</NavLink></li>
                </ul>
            </nav>
            <NavLink  to=""><button>Login</button></NavLink>
            
        </header>
        </>
};

export default Navbar;
