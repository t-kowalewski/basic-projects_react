import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>

      <div>
        {tours.map((tour) => {
          return <Tour tourInfo={tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
