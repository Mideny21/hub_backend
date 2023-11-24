"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProperties = exports.getAllProperties = void 0;
const index_1 = __importDefault(require("../schema/index"));
const getAllProperties = async () => {
    const properties = await index_1.default.findAll();
    if (!properties) {
        throw new Error("Properties not found");
    }
    return properties;
};
exports.getAllProperties = getAllProperties;
const createProperties = async (payload) => {
    var property = await index_1.default.create(payload);
    return property;
};
exports.createProperties = createProperties;
//# sourceMappingURL=index.js.map