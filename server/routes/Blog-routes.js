var express = require('express');
var BlogController=require('../controllers/Blog-controller');
var router = express.Router();

router.post('/addBlog',BlogController.createCrud);
router.post('/fetchAllBlogs',BlogController.fetchAllBlogs);

module.exports = router;
