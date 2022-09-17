import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [hexColor, setHexColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [colorsList, setColorsList] = useState(new Values('#71a507').all(10));

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(hexColor).all(10);
      // console.log(colors);
      setIsError(false);
      setColorsList(colors);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
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
            className={isError ? 'error' : null}
            onChange={(e) => {
              setHexColor(e.target.value);
            }}
          />

          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>

      <section className='colors'>
        {colorsList.map((color, index) => {
          return <SingleColor key={index} hex={color.hex} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
