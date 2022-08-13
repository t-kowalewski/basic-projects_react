import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // const [is]

  const getTours = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response.statusText);
      }
      const tours = await response.json();

      setIsLoading(false);
      setTours(tours);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTours(url);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <section>
          <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
          </div>

          <Tours tours={tours} />
        </section>
      </main>
    );
  }
}

export default App;
