"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const DB_DIALECT = process.env.DB_DIALECT;
const DB_HOST = process.env.DB_HOST;
//const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const configs = {
    PORT,
    DB_DIALECT,
    DB_HOST,
    // DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
};
exports.default = configs;
//# sourceMappingURL=configs.js.map