import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextReviewHandl = () => {
    setIndex((curIndex) => {
      return curIndex < people.length - 1 ? ++curIndex : 0;
    });
  };

  const prevReviewHandl = () => {
    setIndex((curIndex) => {
      return curIndex > 0 ? --curIndex : people.length - 1;
    });
  };

  const randomReviewHandl = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    setIndex((curIndex) => {
      randomIndex = randomIndex === curIndex ? ++randomIndex : randomIndex;
      return randomIndex > people.length - 1 ? 0 : randomIndex;
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevReviewHandl}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReviewHandl}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn' onClick={randomReviewHandl}>
        random review
      </button>
    </article>
  );
};

export default Review;
