"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const logging_1 = require("./logging");
exports.default = [
    common_1.handleCors,
    common_1.handleBodyRequestParsing,
    common_1.handleCompression,
    logging_1.handleLogging,
];
//# sourceMappingURL=index.js.map