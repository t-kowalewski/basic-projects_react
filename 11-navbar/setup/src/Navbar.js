import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const linksRefContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    console.log(linksRefContainer.current);

    const linksSize = linksRef.current.getBoundingClientRect();

    if (showMobileLinks) {
      linksRefContainer.current.style.height = linksSize.height + 'px';
    } else {
      linksRefContainer.current.style.height = '0';
    }
  }, [showMobileLinks]);

  const togleMenuHandler = () => {
    setShowMobileLinks(!showMobileLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={togleMenuHandler}>
            <FaBars />
          </button>
        </div>

        <div
          className={
            showMobileLinks
              ? 'links-container show-container'
              : 'links-container'
          }
          ref={linksRefContainer}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
