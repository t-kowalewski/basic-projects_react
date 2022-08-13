import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { tours, setTours } = props;
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>

      <div>
        {tours.map((tour) => {
          return (
            <Tour
              tourInfo={tour}
              key={tour.id}
              allTours={tours}
              setTours={setTours}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
