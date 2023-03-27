const express = require('express');
const router = express.router();


const homecontroller = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homecontroller.home);
router.use('/users',require('./users')); 
router.use('/posts',require('./posts'));

// for any further routes excess from here
// router.use ('/routerName',require('./routerfile'));

module.exports = router;