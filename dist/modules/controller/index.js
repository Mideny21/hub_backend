"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProperty = void 0;
const index_1 = require("../services/index");
const getAllProperty = async (req, res, next) => {
    try {
        const properties = await (0, index_1.getAllProperties)();
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
};
exports.getAllProperty = getAllProperty;
//# sourceMappingURL=index.js.map