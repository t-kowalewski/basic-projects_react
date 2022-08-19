import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers</h3>

        <section className='info'>
          {questions.map((question) => {
            const { id, title, info } = question;

            return <SingleQuestion key={id} title={title} info={info} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
