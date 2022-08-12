import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { tours } = props;
  return (
    <div>
      {tours.map((tour) => {
        return <Tour tourInfo={tour} key={tour.id} />;
      })}
    </div>
  );
};

export default Tours;
