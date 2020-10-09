const Sequelize = require("sequelize").Sequelize;
const dbConfig = require("./db-config");


let sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
module.exports = sequelize;
