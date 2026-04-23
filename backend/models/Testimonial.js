import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  role: {
    type: String,
    required: true,
    trim: true
  },

  company: {
    type: String,
    required: true,
    trim: true
  },

  quote: {
    type: String,
    required: true,
    maxlength: 300
  },

  avatar: {
    type: String,
    required: true
  },

  companyLogo: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },

  isFeatured: {
    type: Boolean,
    default: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Testimonial", testimonialSchema);