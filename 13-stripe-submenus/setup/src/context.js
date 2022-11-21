import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppConetex = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // const openSidebar = () => {
  //   setIsSidebarOpen(true);
  // };
  const toggleSidebar = () => {
    setIsSidebarOpen((currState) => !currState);
  };
  const toggleSubmenu = () => {
    setIsSubmenuOpen((currState) => !currState);
  };

  return (
    <AppConetex.Provider
      value={{ isSidebarOpen, isSubmenuOpen, toggleSidebar, toggleSubmenu }}
    >
      {children}
    </AppConetex.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppConetex);
};
