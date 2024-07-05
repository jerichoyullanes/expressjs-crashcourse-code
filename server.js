// ES MODULE VERSION

import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js' // Import App Level Middleware
import errorHandler from './middleware/error.js'; // Custom Error Handler
const port = process.env.PORT || 8000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Used the App Level Middleware
// Logger Middleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// Used Custom Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));