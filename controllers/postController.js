// Mock JSON data
let posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
    { id: 3, title: 'Post Three'}
];

/*----------------------------- CRUD FUNCTIONS -----------------------------*/
// CREATE 
// @desc Create new post
// @route POST /api/posts/
export const createPost = (req, res, next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if(!newPost.title) {
        // return res.status(404).json({msg: 'Please include a title'});

        // New Custom Error Handler
        const error = new Error(`Please include a title`);
        error.status = 404;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
};

// READ
// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);

};

// @desc Get single post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    // res.status(200).json(posts.filter((post) => post.id === id));

    if(!post) {
        // return res.status(404).json({msg: `A post with the id of ${id} is not found`}); 

        // New Custom Error Handler
        const error = new Error(`A post with the id of ${id} is not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post); 

};

// UPDATE
// @desc Create new post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        // return res
        //   .status(404)
        //   .json({ msg: `A post with the id of ${id} is not found` });

        // New Custom Error Handler
        const error = new Error(`A post with the id of ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

// DELETE
// @desc Create new post
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        // return res
        //   .status(404)
        //   .json({ msg: `A post with the id of ${id} is not found` });

        // New Custom Error Handler
        const error = new Error(`A post with the id of ${id} is not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};

