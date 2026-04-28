const Course = require('../models/course.model');

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

exports.getCourses = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};