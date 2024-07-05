// ES MODULE VERSION

import express from 'express';
const router = express.Router();

// Mock JSON data
let posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
    { id: 3, title: 'Post Three'}
  ];

/*----------------------------- CRUD FUNCTIONS -----------------------------*/

/* CREATE | POSTS */
// Create new post
router.post('/', (req, res) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if(!newPost.title) {
        return res.status(404).json({msg: 'Please include a title'});
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

/* READ | GET */
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

/* UPDATE | PUT/PATCH */
// Update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        return res
          .status(404)
          .json({ msg: `A post with the id of ${id} is not found` });
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

/* DELETE | DELETE */
// Delete Post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        return res
          .status(404)
          .json({ msg: `A post with the id of ${id} is not found` });
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

export default router;