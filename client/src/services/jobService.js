import axios from 'axios';

const config = {
  headers: { Authorization: localStorage.getItem('token') }
};

export const getJobs = async () => {
  const res = await axios.get('/api/jobs');
  return res.data;
};

export const postJob = async (job) => {
  await axios.post('/api/jobs', job, config);
};
