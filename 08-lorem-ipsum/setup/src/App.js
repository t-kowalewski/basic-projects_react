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
        <label htmlFor='paragraphSelector'>Paragraphs</label>
        <input
          type='number'
          min='0'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button type='submit' className='btn' onClick={submitHandler}>
          Generate
        </button>
      </form>

      <article className='lorem-article'>
        {paragraphs.map((paragraph) => {
          return <p key={new Date().getTime().toString()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
