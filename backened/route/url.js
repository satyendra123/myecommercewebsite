const express = require('express');
const router = express.Router();

const dashboardRoutes = require('../app/dashboard/routes/routes');
const loginRoutes = require('../app/login/routes/routes');
const signupRoutes = require('../app/signup/routes/routes');

router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router;
