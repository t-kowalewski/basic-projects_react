import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import data from './data';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext(); //close sidebar

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>

        <div className='sidebar-links'>
          {data.map((item, index) => {
            return (
              <article key={index}>
                <h4>{item.page}</h4>

                <div className='sidebar-sublinks'>
                  {item.links.map((link, index) => {
                    return (
                      <a key={index} href={link.url}>
                        {link.icon} {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
