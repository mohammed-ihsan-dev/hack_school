import express from 'express';
import Feature from '../models/Feature.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc    Get all features
// @route   GET /api/features
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  const features = await Feature.find({}).sort('order');
  res.json(features);
}));

export default router;
