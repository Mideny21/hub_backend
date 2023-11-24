"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../modules/routes/index"));
const appRouter = (0, express_1.Router)();
// all routes
const appRoutes = [
    {
        path: "/properties",
        router: index_1.default,
    },
];
appRoutes.forEach(route => {
    appRouter.use(route.path, route.router);
});
exports.default = appRouter;
//# sourceMappingURL=index.js.map