import Router from 'koa-router';
import controller = require('../controllers');

export const userRouter: Router = new Router();

userRouter.get('/users', controller.user.getUsers);
userRouter.get('/users/:id', controller.user.getUser);
userRouter.post('/users', controller.user.createUser);
userRouter.put('/users/:id', controller.user.updateUser);
userRouter.delete('/users/:id', controller.user.deleteUser);