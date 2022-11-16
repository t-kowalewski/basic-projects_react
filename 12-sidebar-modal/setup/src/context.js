import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ sidebarIsOpen, setSidebarIsOpen, modalIsOpen, setModalIsOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider };
export { AppProvider };
