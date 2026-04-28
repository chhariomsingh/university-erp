const express = require('express');
const router = express.Router();

const controller = require('../controllers/course.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.post('/', verifyToken, controller.createCourse);
router.get('/', verifyToken, controller.getCourses);

module.exports = router;