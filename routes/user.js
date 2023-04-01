const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user_controller');

console.log('router loaded');

router.get('/user_profile', usercontroller.profile);
 


module.exports = router;