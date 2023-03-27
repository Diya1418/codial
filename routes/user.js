const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user_controller');

console.log('router loaded');

router.get('/profile', profilecontroller.profile);
 


module.exports = router;