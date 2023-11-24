"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../services/index");
const propertiesRouter = express_1.default.Router();
propertiesRouter.get("/", index_1.getAllProperties);
exports.default = propertiesRouter;
//# sourceMappingURL=index.js.map