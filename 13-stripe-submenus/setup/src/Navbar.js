import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import data from './data';

const Navbar = () => {
  const { toggleSubmenu, toggleSidebar } = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          {data.map((item, index) => {
            // console.log(index);
            return (
              <li key={index}>
                <button className='link-btn'>{item.page}</button>
              </li>
            );
          })}
        </ul>

        <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
