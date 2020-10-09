let dotenv = require('dotenv');

dotenv.config();

const env = process.env;


const config = {
    API_PORT: env.API_PORT,
    NODE_ENV: env.NODE_ENV,
    PORT: env.PORT,

    // Database Config
    DB_HOST: env.DB_HOST,
    DB_PORT: env.DB_PORT,
    DB_USER: env.DB_USER,
    DB_PASSWORD: env.DB_PASSWORD,
    DB_NAME: env.DB_NAME,

    // JWT Secret
    JWT_TOKEN_LIFETIME: env.JWT_TOKEN_LIFETIME,
    JWT_SECRET: env.JWT_SECRET,
    
};

// const config = {
//     DB_HOST: "localhost",
//     DB_PORT: 3306,
//     DB_USER: "root",
//     DB_PASSWORD: "amanix007",
//     DB_NAME: "raremark",

// };



module.exports = config;