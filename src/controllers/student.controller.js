const Student = require('../models/student.model');

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

// GET ONE
exports.getStudentById = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  res.json(student);
};

// UPDATE
exports.updateStudent = async (req, res) => {
  await Student.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: "Updated" });
};

// DELETE
exports.deleteStudent = async (req, res) => {
  await Student.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: "Deleted" });
};