import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './actions';

import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const dispatch = useDispatch();
  function handleLogout(e) {
    dispatch(userActions.logout());
  }
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

 


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
            DBS
            </Link>
            <div className='navbar-icon'>
              <img src={process.env.PUBLIC_URL + 'images/dbs-logo.jpg'} alt={"logo"} /> 
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu} >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buy/Sell
              </Link>
            </li>
            <li className='nav-item'>
              <button
                onClick={handleLogout}
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Logout
              </button>
            </li>
          </ul>
            </div>
      </nav>
    </>
  );
}

export default Navbar;