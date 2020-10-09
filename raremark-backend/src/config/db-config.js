const config = require('./config');

const sequalizeOptions = {
    "host": config.DB_HOST,
    "define": {
        "timestamps": false
    },
    "charset": "utf8",
    "collate": "utf8_general_ci",
    "logging": false,
    "dialect": "mysql",
    "log": console.log,
    "port": config.DB_PORT,
};

const dbConfig = {
    "development": {
        "username": config.DB_USER,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        ...sequalizeOptions,
    },
    "test": {
        "username": config.DB_USER,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        ...sequalizeOptions,
    },
    "production": {
        "username": config.DB_USER,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        ...sequalizeOptions,
        "pool": {
            "max": 20,
            "min": 5,
            "idle": 10000
        },
    }
};

// console.log("process.env.NE_ENV", process.env)
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development"
module.exports = dbConfig[env];
