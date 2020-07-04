import Koa, { Context, Next } from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';

const app: Koa = new Koa();
const router: Router = new Router();

// hello world
router.get('/', async (ctx: Context, next: Next) => {
    ctx.body = { msg: 'Hello World' };

    await next();
});

// middleware
app.use(json());
app.use(logger());

// routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa server started')
});
