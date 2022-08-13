import React, { useState } from 'react';

const Tour = (props) => {
  const { image, info, name, price, id } = props.tourInfo;
  const { allTours, setTours } = props;

  const [isFullText, setIsFullText] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />

      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>

        <p>
          {isFullText ? info : info.substring(0, 200) + ' ...'}
          <button onClick={() => setIsFullText(!isFullText)}>
            {!isFullText ? 'Read More' : 'Show Less'}
          </button>
        </p>

        <button
          className='delete-btn'
          onClick={() => setTours(allTours.filter((tour) => tour.id !== id))}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
