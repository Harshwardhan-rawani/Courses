const Course = require('../models/course');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'views/uploads/image');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const getcourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};

const postcourse = async (req, res) => {
  const { name } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const newCourse = new Course({ name, image: imagePath });
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add course' });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    await Course.findByIdAndDelete(id);
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete course' });
  }
};

module.exports = { getcourse, postcourse, deleteCourse, upload };
