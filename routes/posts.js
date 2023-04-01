const express = require('express');
const router = express.Router();

const postcontroller = require('../controllers/post_controller');

console.log('router loaded');

router.get('/posts', postcontroller.post);
 


module.exports = router;