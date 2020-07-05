import Router from 'koa-router';
import createTestData = require('../__mock__/createTestData');

export const qaRouter: Router = new Router();

qaRouter.post('/qa/users', createTestData.TestData.createTestUsers);