const Blog = require('../Models/BlogModel');

exports.getBlogs = (req, res, next) => {
    Blog.find()
        .then(blogs => {
            console.log(blogs)
            res.status(200).send(blogs)
        })
        .catch(err => {
            console.log('Fucked up somewhere, gotta recheck in getBlogs of BlogController')
            console.log(err)
        });
}

exports.getBlogEntry = (req, res, next) => {
    Blog.findById(req.params.id)
    .then(blog => {
        console.log(blog)
        res.status(200).send(blog)
    })
    .catch(err => {
        console.log('Fucked up somewhere, gotta recheck in getBlogEntry of BlogController')
        console.log(err)
    })
}