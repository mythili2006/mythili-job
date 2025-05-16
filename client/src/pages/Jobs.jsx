import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/jobService';
import JobCard from '../components/JobCard';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getJobs();
      setJobs(data);
    })();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
