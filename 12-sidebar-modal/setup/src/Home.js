import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  // const data = useContext(AppContext);
  const { setSidebarIsOpen, setModalIsOpen } = useGlobalContext();
  // console.log(data);

  return (
    <main>
      <button
        className='sidebar-toggle'
        onClick={() => {
          setSidebarIsOpen(true);
        }}
      >
        <FaBars />
      </button>
      <button
        className='btn'
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
