import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './users.js';
import courses from './courses.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import connectDB from '../config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Course.deleteMany();
    await User.deleteMany();

    // Insert Users
    const createdUsers = await User.insertMany(users);
    
    // Add logic here if you need to associate courses with user ID (e.g., admin link)
    // const adminUser = createdUsers[0]._id;
    // const sampleCourses = courses.map((course) => {
    //   return { ...course, user: adminUser };
    // });
    // await Course.insertMany(sampleCourses);

    await Course.insertMany(courses);

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Course.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// If "-d" argument is passed, destroy data, else import
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
