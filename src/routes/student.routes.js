const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Protected routes
router.post('/', verifyToken, studentController.createStudent);
router.get('/', verifyToken, studentController.getStudents);
router.get('/:id', verifyToken, studentController.getStudentById);
router.put('/:id', verifyToken, studentController.updateStudent);
router.delete('/:id', verifyToken, studentController.deleteStudent);

module.exports = router;