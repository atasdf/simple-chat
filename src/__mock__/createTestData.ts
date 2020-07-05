import { BaseContext } from 'koa';
import {getConnection} from "typeorm";
import { User } from '../models/user';

export class TestData {
    public static async createTestUsers(ctx: BaseContext) {
        try {
            await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { name: "pendalph", email: "pendalph@hotmail.com", hashedPassword: "pass123" },
                { name: "kive", email: "kive@icloud.com", hashedPassword: "pass123" },
                { name: "frank", email: "frank@icloud.com", hashedPassword: "pass123" }
            ])
            .execute();
            ctx.body = "Test users created successfully"
        } catch (err) {
            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                message: err.message
            }
        }
    }
};