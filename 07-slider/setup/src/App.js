import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronRight, FaQuoteRight } from 'react-icons/fa';
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
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className='section-center'>
        {people.map((person, ind) => {
          const { id, image, name, title, quote } = person;

          return (
            <article
              key={id}
              className={
                ind === activeIndex
                  ? 'activeSlide'
                  : activeIndex === 0 && ind === people.length - 1
                  ? 'lastSlide'
                  : ind === activeIndex - 1
                  ? 'lastSlide'
                  : 'nextSlide'
              }
            >
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

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
