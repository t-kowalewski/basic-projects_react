import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status < 200 || resp.status > 299) {
          throw new Error(resp.statusText);
        } else {
          return resp.json();
        }
      })
      .then((data) => {
        setIsLoading(false);
        setJobsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading || jobsData.length === 0) {
    return (
      <section className='section loading'>
        <h2>Loading...</h2>
      </section>
    );
  } else {
    const { title, dates, duties, company } = jobsData[jobIndex];

    return (
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>

        <div className='jobs-center'>
          {/* btn container */}
          <div className='btn-container'>
            {jobsData.map((job, index) => {
              return (
                <button
                  className={
                    index === jobIndex ? 'job-btn active-btn' : 'job-btn'
                  }
                  key={job.id}
                  onClick={() => {
                    setJobIndex(index);
                  }}
                >
                  {job.company}
                </button>
              );
            })}
          </div>

          {/* job info */}
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>

            {duties.map((duty, index) => {
              return (
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>

        <button className='btn' type='button'>
          more info
        </button>
      </section>
    );
  }
}

export default App;
