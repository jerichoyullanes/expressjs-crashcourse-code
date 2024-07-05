// ES MODULE VERSION

import express from 'express';
const router = express.Router();

// Mock JSON data
let posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
    { id: 3, title: 'Post Three'}
  ]

// Get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);

});

// Get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    // res.status(200).json(posts.filter((post) => post.id === id));

    if(!post) {
        return res.status(404).json({msg: `A post with the id of ${id} is not found`});
    }
    res.status(200).json(post); 

}); 

export default router;