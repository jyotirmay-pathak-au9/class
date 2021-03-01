const express = require('express');
const userController = require('../controller/user_controller');
const router = express.Router();

router.get('/profile', userController.profile);
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);

module.exports = router;