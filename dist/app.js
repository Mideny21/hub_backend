"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.use("api/properties", propertiesRouter);
// applyMiddleware(middleware, app);
//  applyRoutes([
//   { 
//     path: "/properties",
//     router: propertiesRouter,
//   },
//  ], app); // add your routes here
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello from Backend");
// });
(0, utils_1.applyMiddleware)(errorHandlers_1.default, app);
exports.default = app;
//# sourceMappingURL=app.js.map