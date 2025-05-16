import React, { useEffect, useState } from 'react';
import { getApplications } from '../services/applicationService';

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getApplications();
      setApplications(data);
    })();
  }, []);

  return (
    <div>
      <h2>All Applications</h2>
      {applications.map(app => (
        <div key={app._id}>
          <h3>{app.job.title}</h3>
          <p>Applicant: {app.applicant.name} ({app.applicant.email})</p>
          <p>Resume: {app.resumeLink}</p>
        </div>
      ))}
    </div>
  );
}

export default Applications;
    