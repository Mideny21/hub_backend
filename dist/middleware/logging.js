"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogging = void 0;
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const handleLogging = (router) => router.use(express_winston_1.default.logger({
    msg: "HTTP {{req.method}} {{req.url}}",
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json()),
    transports: [new winston_1.default.transports.Console({ handleExceptions: true })],
}));
exports.handleLogging = handleLogging;
//# sourceMappingURL=logging.js.map