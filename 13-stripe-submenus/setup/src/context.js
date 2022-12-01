import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppConetex = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [selectedPage, setSelectedPage] = useState({ page: '', links: [] });

  const toggleSidebar = () => {
    setIsSidebarOpen((currState) => !currState);
  };

  const openSubmenu = (page, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
    setSelectedPage(findPage(page));
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const findPage = (page) => {
    return sublinks.find((item) => item.page === page);
  };

  return (
    <AppConetex.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        location,
        selectedPage,
        toggleSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppConetex.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppConetex);
};
