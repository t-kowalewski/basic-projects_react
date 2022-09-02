import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = (props) => {
  const { people, activeIndex } = props;

  return people.map((person, ind) => {
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
  });
};

export default Reviews;
