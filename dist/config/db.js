"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const logger_1 = require("./logger");
const mysql2_1 = require("mysql2");
const configs_1 = __importDefault(require("./configs"));
class SequelizeConnection {
    static instance;
    static getInstance() {
        if (!SequelizeConnection.instance) {
            const dbConfig = {
                dialect: configs_1.default.DB_DIALECT,
                host: configs_1.default.DB_HOST,
                //  port: Number(configs.DB_PORT),
                username: configs_1.default.DB_USERNAME,
                password: configs_1.default.DB_PASSWORD,
                database: configs_1.default.DB_DATABASE,
                logging: false,
            };
            SequelizeConnection.instance = new sequelize_1.Sequelize(dbConfig);
        }
        return SequelizeConnection.instance;
    }
    static async connect() {
        const sequelize = SequelizeConnection.getInstance();
        try {
            // Create MySQL connection
            const mysqlConnection = (0, mysql2_1.createConnection)({
                host: configs_1.default.DB_HOST,
                user: configs_1.default.DB_USERNAME,
                password: configs_1.default.DB_PASSWORD,
            });
            mysqlConnection.connect();
            // Check if database exists
            const [rows] = await mysqlConnection
                .promise()
                .query(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${process.env.DB_DATABASE}'`);
            if (!rows.length) {
                // Create database if doesn't exist
                await mysqlConnection
                    .promise()
                    .query(`CREATE DATABASE ${configs_1.default.DB_DATABASE}`);
            }
            // Close MySQL connection
            mysqlConnection.end();
            await sequelize.authenticate();
            logger_1.logger.info({ message: `Sequelize Authenticated!` });
            logger_1.logger.info({ message: `Sequelize Connected and Database Created!` });
            return sequelize;
        }
        catch (ex) {
            logger_1.logger.info({
                message: `Error while creation connection to database :: ${ex}`,
            });
            return sequelize;
        }
    }
    static async close() {
        const sequelize = SequelizeConnection.getInstance();
        try {
            await sequelize.close();
            logger_1.logger.info({ message: `Database connection closed successfully` });
            return sequelize;
        }
        catch (ex) {
            logger_1.logger.info({ message: `Error while closing database connection ::` });
            return sequelize;
        }
    }
}
exports.default = SequelizeConnection;
//# sourceMappingURL=db.js.map