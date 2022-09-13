import React, { useState } from 'react';
import data from './data';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [amount, setAmount] = useState('0');

  const submitHandler = (e) => {
    e.preventDefault();

    setParagraphs(data.slice(0, Number(amount)));
  };

  return (
    <section className='section-center'>
      <h3>lorem ipsum generator</h3>

      <form className='lorem-form'>
        <label htmlFor='paragraphAmount'>Paragraphs</label>
        <input
          type='number'
          min='0'
          max={data.length.toString()}
          id='paragraphAmount'
          name='paragraphAmount'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button type='submit' className='btn' onClick={submitHandler}>
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {paragraphs.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
