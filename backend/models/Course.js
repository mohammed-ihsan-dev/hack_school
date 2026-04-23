import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    company: String,
    avatar: String,
  },
  { _id: false } 
);

const courseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  category: String,
  level: String,
  duration: String,
  lessons: Number,
  rating: Number,

  isInternship: Boolean,
  stipend: String,

  image: String,

  mentor: {
    name: String,
    role: String,
    image: String
  },

  highlights: [String],
  skills: [String],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model("Course", courseSchema);

export default Course;