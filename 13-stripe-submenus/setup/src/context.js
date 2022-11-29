import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppConetex = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});

  // const openSidebar = () => {
  //   setIsSidebarOpen(true);
  // };
  const toggleSidebar = () => {
    setIsSidebarOpen((currState) => !currState);
  };
  // const toggleSubmenu = () => {
  //   setIsSubmenuOpen((currState) => !currState);
  // };
  const openSubmenu = (page, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  return (
    <AppConetex.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        location,
        toggleSidebar,
        openSubmenu,
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
