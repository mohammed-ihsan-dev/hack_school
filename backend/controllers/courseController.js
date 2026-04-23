import Course from '../models/Course.js';

// @desc    Fetch all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res, next) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { title: { $regex: req.query.search, $options: 'i' } },
            { description: { $regex: req.query.search, $options: 'i' } },
          ],
        }
      : {};

    const category = req.query.category && req.query.category !== 'All'
      ? { category: req.query.category }
      : {};

    const level = req.query.level && req.query.level !== 'All'
      ? { level: req.query.level }
      : {};

    const courses = await Course.find({ ...keyword, ...category, ...level });
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (course) {
      res.json(course);
    } else {
      res.status(404);
      throw new Error('Course not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = async (req, res, next) => {
  try {
    const {
      title,
      category,
      level,
      price,
      originalPrice,
      duration,
      lessons,
      rating,
      isInternship,
      stipend,
      description,
      image,
    } = req.body;

    const course = new Course({
      title,
      category,
      level,
      price,
      originalPrice,
      duration,
      lessons,
      rating,
      isInternship,
      stipend,
      description,
      image,
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    next(error);
  }
};

export { getCourses, getCourseById, createCourse };
