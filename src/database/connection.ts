import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const name: string = `${ process.env.MYSQL_DATABASE_NAME }`;
const user: string = `${ process.env.MYSQL_DATABASE_USER }`;
const pass: string = `${ process.env.MYSQL_DATABASE_PASS }`;
const host: string = `${ process.env.MYSQL_DATABASE_HOST }`;

const db = new Sequelize( name , user, pass, {
    host: host,
    dialect: 'mysql',
    // logging: false
});


export default db;