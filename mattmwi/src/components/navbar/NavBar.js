import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './NavBar.css'
import logo from 'E:/Matt Software Engineering/MattMWI/MattMWI/mattmwi/src/assets/Logo.png'

function NavBar(){
  const location = useLocation();
  {
    return(
      <div className='navbar-items'>
        <nav className='navbar-item-left'>
          <div className='logo-div'>
            <Link to='/'> <img className='Navbar-logo' src={logo} alt='MWI'/></Link>
          </div>        
        </nav>
        <nav className={location.pathname === '/Contact' ? 'navbar-item-contact' : 'navbar-item-right'}>
        <div className='menu-item'>
            {
                location.pathname === '/Contact' ?
                  <Link className='nav-links' to='/'> home</Link>
                    :
                  <Link className='nav-links' to='/Contact'>contact</Link>              
            }
          </div>
        </nav>
      </div>

    )
  }
}

export default NavBar