const Student = require('./student.model');
const Course = require('./course.model');

// ✅ Relation define HERE ONLY
Student.belongsTo(Course, { foreignKey: 'courseId' });
Course.hasMany(Student, { foreignKey: 'courseId' });

module.exports = {
  Student,
  Course
};