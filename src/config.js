import {config} from 'dotenv';

config();

export default {
    host : process.env.HOST,
    database : process.env.DATABASE,
    password : process.env.PASSWORD,
    user : process.env.USER
};