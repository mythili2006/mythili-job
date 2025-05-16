import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    resumeLink: String,
    coverLetter: String
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
