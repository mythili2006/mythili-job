import express from 'express';
import { postJob, getJobs } from '../controllers/jobController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, postJob);
router.get('/', getJobs);

export default router;
