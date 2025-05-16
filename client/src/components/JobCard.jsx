import React from 'react';

function JobCard({ job }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobCard;
