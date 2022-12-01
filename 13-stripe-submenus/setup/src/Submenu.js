import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const refContainer = useRef(null);

  const {
    isSubmenuOpen,
    location,
    selectedPage: { page, links },
  } = useGlobalContext();

  useEffect(() => {
    const { center, bottom } = location;
    refContainer.current.style.left = `${center}px`;
    refContainer.current.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={refContainer}
    >
      <section>
        <h4>{page}</h4>
        <div
          className={`submenu-center col-${
            links.length === 3 ? '3' : links.length > 3 ? '4' : 2
          }`}
        >
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
