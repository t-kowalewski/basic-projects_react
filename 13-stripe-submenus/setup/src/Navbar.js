import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import data from './data';

const Navbar = () => {
  const { openSubmenu, toggleSidebar } = useGlobalContext();

  const showSubmenu = (e) => {
    const page = e.target.textContent;
    const elLocation = e.target.getBoundingClientRect();
    const center = elLocation.right - elLocation.width / 2;
    const bottom = elLocation.bottom - 3;
    console.log(elLocation);
    console.log(page);
    openSubmenu(page, { center, bottom });
  };

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
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={showSubmenu}>
                  {item.page}
                </button>
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
