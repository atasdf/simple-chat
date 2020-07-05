import { createConnection } from 'typeorm';
import { postgresTables } from '../db/tables';

export const postgresDB = async () => {
    return await createConnection({
        type: 'postgres',
        host: 'host',
        port: 5432,
        username: 'username',
        password: 'password',
        database: 'databaseName',
        ssl: true,
        entities: postgresTables,
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
    }).catch((error) => {
        console.log(error);
    })
};