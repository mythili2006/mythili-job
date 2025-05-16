const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mythilip2023cse:Mythili%4013@mythili.avtia.mongodb.net/jobportal?retryWrites=true&w=majority');

const resumesDir = path.join(__dirname, 'resumes');
if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir);
}
app.use('/resumes', express.static('resumes'));

const userSchema = new mongoose.Schema({
  email: String,
  role: String
});

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String,
  postedBy: String
});

const applicationSchema = new mongoose.Schema({
  jobId: mongoose.Schema.Types.ObjectId,
  applicantEmail: String,
  resumePath: String,
  confirmation: String
});

const User = mongoose.model('User', userSchema);
const Job = mongoose.model('Job', jobSchema);
const Application = mongoose.model('Application', applicationSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'resumes'),
  filename: (req, file, cb) => {
    const originalName = file.originalname.replace(/\s+/g, '_').replace(/[^\w.-]/g, '');
    const timestamp = Date.now();
    cb(null, `${timestamp}-${originalName}`);
  }
});
const upload = multer({ storage });

app.post('/login', async (req, res) => {
  const { email, role } = req.body;
  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email, role });
  res.json(user);
});

app.post('/post-job', async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.post('/apply/:jobId', upload.single('resume'), async (req, res) => {
  console.log('--- Apply Endpoint Hit ---');
  console.log('Job ID:', req.params.jobId);
  console.log('Body:', req.body);
  console.log('File:', req.file);

  const { applicantEmail } = req.body;
  const resumePath = req.file ? req.file.path : '';

  try {
    if (!applicantEmail) {
      throw new Error('Missing applicantEmail in request body');
    }
    if (!req.file) {
      throw new Error('Resume file not received');
    }

    const application = await Application.create({
      jobId: req.params.jobId,
      applicantEmail,
      resumePath,
      confirmation: ''
    });

    console.log('Application saved:', application);
    res.json(application);
  } catch (err) {
    console.error('Error in /apply/:jobId:', err.message);
    res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
});

app.get('/applications/:jobId', async (req, res) => {
  const apps = await Application.find({ jobId: req.params.jobId });
  res.json(apps);
});

app.post('/confirm/:appId', async (req, res) => {
  const { message } = req.body;
  const app = await Application.findByIdAndUpdate(
    req.params.appId,
    { confirmation: message },
    { new: true }
  );
  res.json(app);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
