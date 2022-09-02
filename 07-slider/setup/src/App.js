import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Title from './Title';
import Reviews from './Reviews';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((currIndex) =>
      ++currIndex > people.length - 1 ? 0 : currIndex
    );
  };

  const prev = () => {
    setActiveIndex((currIndex) =>
      --currIndex < 0 ? people.length - 1 : currIndex
    );
  };

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearTimeout(myTimeout);
    };
  });

  return (
    <section className='section'>
      <Title />

      <div className='section-center'>
        <Reviews people={people} activeIndex={activeIndex} />

        <button className='prev' onClick={prev}>
          <FiChevronLeft />
        </button>

        <button className='next' onClick={next}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
