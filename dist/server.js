"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const configs_1 = __importDefault(require("./config/configs"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const logger_1 = require("./config/logger");
const config_1 = require("./config");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const services_1 = require("./modules/services");
const app_1 = __importDefault(require("./app"));
const router = (0, express_1.default)();
(0, utils_1.applyMiddleware)(middleware_1.default, router);
app_1.default.use((0, cors_1.default)());
// Serving static files
app_1.default.use('/public', express_1.default.static(path_1.default.join(__dirname, '/uploads')));
//ENDPOINT TO LIST ALL PROPERTIES
router.get("/properties", async (req, res) => {
    try {
        const properties = await (0, services_1.getAllProperties)();
        return res.status(200).json({
            data: properties,
            error: false,
        });
    }
    catch (err) {
        console.error('Error in getAllProperty:', err);
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error',
        });
    }
});
// ENDPOINT TO CREATE PROPERTIES
const storage = multer_1.default.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage });
router.post("/properties", upload.single('filepath'), async (req, res) => {
    try {
        const properties = await (0, services_1.createProperties)({ ...req.body, filepath: `uploads/${req.file?.filename}` });
        return res.status(200).json({
            data: properties,
            error: false,
            msg: "Properties created successfully",
        });
    }
    catch (err) {
        console.error('Error in getAllProperty:', err);
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error',
        });
    }
});
(0, utils_1.applyMiddleware)(errorHandlers_1.default, router);
const server = http_1.default.createServer(router);
async function startServer() {
    await (0, config_1.initDependencies)();
    server.listen(configs_1.default.PORT, () => {
        return logger_1.logger.info({
            message: `The backend is running at http://localhost:${configs_1.default.PORT}`,
        });
    });
}
startServer();
//# sourceMappingURL=server.js.map