import Application from '../models/Application.js';

export const applyJob = async (req, res) => {
    const { jobId, resumeLink, coverLetter } = req.body;
    try {
        const application = new Application({ job: jobId, applicant: req.user.id, resumeLink, coverLetter });
        await application.save();
        res.status(201).json(application);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getApplications = async (req, res) => {
    try {
        const applications = await Application.find({}).populate('job').populate('applicant', 'name email');
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
