import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// protect middleware ensures only logged-in users access the profile
router.get('/profile', protect, getUserProfile);

export default router;
