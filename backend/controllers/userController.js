import User from '../models/User.js';

// @desc    Get logged in user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = async (req, res, next) => {
  try {
    // req.user is set in the authMiddleware
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};

export { getUserProfile };
