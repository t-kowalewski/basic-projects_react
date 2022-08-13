import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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
  } else if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <div className='underline'></div>

          <button
            className='btn'
            onClick={() => {
              getTours(url);
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} setTours={setTours} />
      </main>
    );
  }
}

export default App;
