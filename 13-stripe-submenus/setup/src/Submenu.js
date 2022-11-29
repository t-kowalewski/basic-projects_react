import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const refContainer = useRef(null);
  const { isSubmenuOpen, location } = useGlobalContext();

  useEffect(() => {
    // console.log(refContainer.current);
    const { center, bottom } = location;
    refContainer.current.style.left = `${center}px`;
    refContainer.current.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={refContainer}
    >
      Test
    </aside>
  );
};

export default Submenu;
