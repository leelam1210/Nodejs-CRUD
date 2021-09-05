const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// router.get('/stored/courses', userController.register);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
