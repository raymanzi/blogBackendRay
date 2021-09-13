const express = require ('express');
const router = express.Router();
const blog = require('../models/blog');

// get a list of blogs from the db
router.get('/blogs', function(req, res, next){
    blog.find({}).then(function(blogs){
        res.send(blogs);
    });
    //res.send({type: 'GET'});
});

// add a new blog to the db
router.post('/blogs', function(req, res, next){
    blog.create(req.body).then(function(blog){
        //res.send(blog);
        return res.status(201).json({
            success: true,
            message: 'blog created',
            blog: blog
          });
    }).catch(next);
});

// update a blog in the db
router.put('/blogs/:id', function(req, res, next){
    blog.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        blog.findOne({_id: req.params.id}).then(function(blog){
            res.send(blog);
        });
    }).catch(next);
});

// delete a blog from the db
router.delete('/blogs/:id', function(req, res, next){
    blog.findByIdAndRemove({_id: req.params.id}).then(function(blog){
        res.send(blog);
    }).catch(next);
});

module.exports = router;