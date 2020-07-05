import app from './app';
import { Context, Next } from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';

import { postgresDB } from './config/postgres';
import { qaRouter } from './routes/qa.routes';
import { userRouter } from './routes/user.routes';


const router: Router = new Router();

// hello world
router.get('/', async (ctx: Context, next: Next) => {
    ctx.body = { msg: 'Hello World' };

    await next();
});

// database
const bootstrap = async () => {
    await postgresDB();

    app.use(qaRouter.routes()).use(qaRouter.allowedMethods());
    app.use(userRouter.routes()).use(userRouter.allowedMethods());

    app.listen(3000, () => {
        console.log('koa server started')
    });
};

// middleware
app.use(json());
app.use(logger());
bootstrap();
