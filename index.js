const express = require('express');
const validToken = require('./middlewares/validToken');
const { login } = require('./application/user/loginController');
const { getAllUsers, createUser, getOneUserById, deleteUser } = require('./application/user/userController');
const { getAllPost, createPost, updatePost, getOnePostById, getPostsByTerm, removePost } = require('./application/post/postController');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/users/',validToken, getAllUsers);
app.post('/users/', createUser);
app.get('/user/:id', getOneUserById)
app.delete('/user/:id', validToken, deleteUser);
app.use('/login/', login);
app.post('/post/', validToken, createPost);
app.get('/post/', getAllPost);
app.put('/post/:id', validToken, updatePost);
app.get('/post/:id', getOnePostById);
app.get('/posts/search/', getPostsByTerm);
app.delete('/post/:id', validToken, removePost);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!!');
}); 
