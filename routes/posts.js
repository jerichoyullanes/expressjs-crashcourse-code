// ES MODULE VERSION
import express from 'express';
import { 
    createPost, 
    getPosts, 
    getPost, 
    updatePost, 
    deletePost 
} from '../controllers/postController.js'
const router = express.Router();

/* Route Level Middleware */
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};
// NOTE: to used this you need to put it into the function name on the argument of request functions */
// Example: router.get('/', logger, (req, res) => {});

/*xxxxxxxxxxxxxxxxxx CODES THAT MOVED TO "postController.js" xxxxxxxxxxxxxxxxxx*/
// // Mock JSON data
// let posts = [
//     { id: 1, title: 'Post One'},
//     { id: 2, title: 'Post Two'},
//     { id: 3, title: 'Post Three'}
//   ];

/*----------------------------- CRUD FUNCTIONS -----------------------------*/

/* CREATE | POSTS */
// Create new post
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     const newPost = {
//         id: posts.length + 1,
//         title: req.body.title,
//     };

//     if(!newPost.title) {
//         // return res.status(404).json({msg: 'Please include a title'});

//         // New Custom Error Handler
//         const error = new Error(`Please include a title`);
//         error.status = 404;
//         return next(error);
//     }

//     posts.push(newPost);
//     res.status(201).json(posts);
// });

// /* READ | GET */
// // Get all posts
// router.get('/', (req, res, next) => {
//     const limit = parseInt(req.query.limit);

//     if (!isNaN(limit) && limit > 0) {
//         return res.status(200).json(posts.slice(0, limit));
//     }
//     res.status(200).json(posts);

// });

// // Get single post
// router.get('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     // res.status(200).json(posts.filter((post) => post.id === id));

//     if(!post) {
//         // return res.status(404).json({msg: `A post with the id of ${id} is not found`}); 

//         // New Custom Error Handler
//         const error = new Error(`A post with the id of ${id} is not found`);
//         error.status = 404;
//         return next(error);
//     }
//     res.status(200).json(post); 

// }); 

// /* UPDATE | PUT/PATCH */
// // Update post
// router.put('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if(!post) {
//         // return res
//         //   .status(404)
//         //   .json({ msg: `A post with the id of ${id} is not found` });

//         // New Custom Error Handler
//         const error = new Error(`A post with the id of ${id} is not found`);
//         error.status = 404;
//         return next(error);
//     }

//     post.title = req.body.title;
//     res.status(200).json(posts);
// });

// /* DELETE | DELETE */
// // Delete Post
// router.delete('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if(!post) {
//         // return res
//         //   .status(404)
//         //   .json({ msg: `A post with the id of ${id} is not found` });

//         // New Custom Error Handler
//         const error = new Error(`A post with the id of ${id} is not found`);
//         error.status = 404;
//         return next(error);
//     }

//     posts = posts.filter((post) => post.id !== id);
//     res.status(200).json(posts);
// });
/*xxxxxxxxxxxxxxxxxx CODES THAT MOVED TO "postController.js" xxxxxxxxxxxxxxxxxx*/


/* CREATE | POSTS */
// Create new post
router.post('/', createPost);

/* READ | GET */
// Get all posts
router.get('/', getPosts);
// Get single post
router.get('/:id', getPost);

/* UPDATE | PUT/PATCH */
// Update post
router.put('/:id', updatePost);

/* DELETE | DELETE */
// Delete Post
router.delete('/:id', deletePost);

export default router;