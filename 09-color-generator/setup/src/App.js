import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [hexColor, setHexColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [colorsList, setColorsList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('Submited!');
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>

        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='color'
            id='color'
            placeholder='#71a507'
            value={hexColor}
            onChange={(e) => {
              setHexColor(e.target.value);
            }}
          />

          <button type='submit' className='btn'>
            Submit
          </button>
        </form>

        <section>
          <article></article>
        </section>
      </section>

      <section className='colors'>
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
