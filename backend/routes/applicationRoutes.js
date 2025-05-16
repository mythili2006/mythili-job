import express from 'express';
import { applyJob, getApplications } from '../controllers/applicationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, applyJob);
router.get('/', authMiddleware, getApplications);

export default router;
