import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [people, setPeople] = useState(data);

  const clearListHandler = () => {
    setPeople([]);
  };

  return (
    <>
      <h3>{people.length} birthdays today</h3>

      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article className='person' key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}

      <button onClick={clearListHandler}>Clear list</button>
    </>
  );
};

export default List;
