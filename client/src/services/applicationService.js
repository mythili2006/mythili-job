import axios from 'axios';

const config = {
  headers: { Authorization: localStorage.getItem('token') }
};

export const applyJob = async (application) => {
  await axios.post('/api/applications', application, config);
};

export const getApplications = async () => {
  const res = await axios.get('/api/applications', config);
  return res.data;
};
