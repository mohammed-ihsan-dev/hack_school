import Testimonial from '../models/Testimonial.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.json(testimonials);
});

// @desc    Create a testimonial (Admin only)
// @route   POST /api/testimonials
// @access  Private/Admin
export const createTestimonial = asyncHandler(async (req, res) => {
  const { name, role, company, quote, avatar, companyLogo, rating } = req.body;

  const testimonial = new Testimonial({
    name,
    role,
    company,
    quote,
    avatar,
    companyLogo,
    rating
  });

  const createdTestimonial = await testimonial.save();
  res.status(201).json(createdTestimonial);
});
