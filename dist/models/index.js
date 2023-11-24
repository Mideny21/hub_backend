"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const db_1 = __importDefault(require("../config/db"));
const sequelize = db_1.default.getInstance();
exports.database = {
    sequelize,
};
//# sourceMappingURL=index.js.map