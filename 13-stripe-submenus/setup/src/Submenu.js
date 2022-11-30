import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const refContainer = useRef(null);
  const {
    isSubmenuOpen,
    location,
    selectedPage: { page, links },
    closeSubmenu,
  } = useGlobalContext();

  useEffect(() => {
    // console.log(refContainer.current);
    const { center, bottom } = location;
    refContainer.current.style.left = `${center}px`;
    refContainer.current.style.top = `${bottom}px`;
  }, [location]);

  // console.log(selectedPage);
  // console.log(page, links);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={refContainer}
      onMouseLeave={closeSubmenu}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length.toString()}`}>
          {links.map((item, index) => {
            const { label, icon, url } = item;
            return (
              <a key={index} href={url}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
