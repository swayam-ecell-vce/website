const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/BlogController');

router.get('/blog', BlogController.getBlogs);
router.get('/blog/:id', BlogController.getBlogEntry);

module.exports = router;