"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDependencies = void 0;
const models_1 = require("../models");
const db_1 = __importDefault(require("./db"));
const logger_1 = require("./logger");
const initDb = async () => {
    await db_1.default.connect();
    // once connection is authenticated, sequelize will sync the database models
    // force flag is used to drop the database and create the database again
    models_1.database.sequelize.sync({ force: false });
    logger_1.logger.info({
        message: `Postgres client connected`,
    });
};
const initDependencies = async () => {
    await initDb();
};
exports.initDependencies = initDependencies;
//# sourceMappingURL=index.js.map