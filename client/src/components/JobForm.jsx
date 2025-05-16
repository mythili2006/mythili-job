import React, { useState } from 'react';
import { postJob } from '../services/jobService';

function JobForm() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postJob({ title, company, location, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default JobForm;
