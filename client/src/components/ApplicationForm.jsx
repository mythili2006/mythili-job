import React, { useState } from 'react';
import { applyJob } from '../services/applicationService';

function ApplicationForm({ jobId }) {
  const [resumeLink, setResumeLink] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await applyJob({ jobId, resumeLink, coverLetter });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Job</h2>
      <input value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} placeholder="Resume Link" />
      <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Cover Letter"></textarea>
      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplicationForm;
